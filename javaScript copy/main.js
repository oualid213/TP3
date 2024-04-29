fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        const recipeRow = document.getElementById('recipeRow');
        const tableelement = document.getElementById('table');
        const typeCuisine = document.getElementById('typeCuisine');

        let totalRating = 0;
        let totalRecipes = json.recipes.length; // Nombre total de recettes

        for (let i = 0; i < totalRecipes; i++) {
            const recipe = json.recipes[i];
            const cardHtml = `
                <div class="col-md-3 mb-4 ">
                    <a href="detail.html?id=${recipe.id}" class="text-decoration-none text-dark " id="${recipe.id}">
                        <div class="card" id="${recipe.id}">
                            <img src="${recipe.image}" class="card-img-top" alt="Recipe Image">
                            <div class="card-body bg-custom">
                                <h5 class="card-title text-center">${recipe.name}</h5>
                                <p class="card-text text-center">${recipe.cuisine}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            recipeRow.innerHTML += cardHtml;

            totalRating += recipe.rating;
            // Calcul de la somme des ratings
        }

        const averageRating = totalRating / totalRecipes; // Calcul de la moyenne générale des ratings

        console.log('Moyenne générale des ratings :', averageRating);

        for (let i = 0; i < totalRecipes; i++) {
            const recipe = json.recipes[i];
            let tableRow2 = '';

            if (recipe.cookTimeMinutes <= 10) {
                tableRow2 = `<td><i class="fa-solid fa-bolt"></i></td>`;
            } else if (recipe.cookTimeMinutes < 40 && recipe.cookTimeMinutes > 10) {
                tableRow2 = `<td><i class="fa-solid fa-hourglass-half"></i></td>`;
            } else {
                tableRow2 = `<td><i class="fa-solid fa-hourglass-end"></i></td>`;
            }

                let BackgroundColor;
            if(recipe.difficulty == "Easy"){
                BackgroundColor = 'vert'
            }else if(recipe.difficulty == "Medium"){
                BackgroundColor = 'orange'

            }else{
                BackgroundColor = 'vert'

            }

            const tableRow = `
                <tr data-id="${recipe.id}">
                    <td>${recipe.name}</td>
                    <td>${recipe.rating}</td>
                    <td>${averageRating.toFixed(2)}</td>
                    ${tableRow2}
                    <td class="${BackgroundColor}">${recipe.difficulty}</td>
                    <td><button class="button-custom btn-recipe"><i class="fa-solid fa-link"></i></button></td>
                </tr>
            `;
            tableelement.innerHTML += tableRow;
        }

        const uniqueCuisines = Array.from(new Set(json.recipes.map(recipe => recipe.cuisine)));

        for (let i = 0; i < uniqueCuisines.length; i++) {
            const cuisine = uniqueCuisines[i];
            const textHtml = `
                <div class="form-check form-check-inline">
                    <input class="form-check-input checkbox bg-custom2" type="checkbox" name="${cuisine}" id="${cuisine}">
                    <label class="form-check-label " for="${cuisine}">${cuisine}</label>
                </div>
            `;
            typeCuisine.innerHTML += textHtml;
        }
    })
    .catch(err => console.error('Erreur de récupération des données :', err))
    .finally(() => {
        const btnRecipe = document.getElementsByClassName("btn-recipe");

        for (let i = 0; i < btnRecipe.length; i++) {
            btnRecipe[i].addEventListener("click", () => {
                const tr = btnRecipe[i].closest("tr");
                const id = tr.getAttribute("data-id");
                window.location.href = "detail.html?id=" + id;
            });
        }
    });
