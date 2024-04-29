fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(json => {
        const checkboxes = document.querySelectorAll(".checkbox");
        const recipeRow = document.getElementById('recipeRow');
        for(let i = 0; i<checkboxes.length;i++){
            checkboxes[i].addEventListener("change", (event) => {
                if(event.target.checked){
                    const cuisine = event.target.id; // Récupérer l'ID de la case à cocher cochée
                    console.log(cuisine);
                    if(cuisine != "all"){
                                            changeElement(cuisine, json, recipeRow); // Appeler la fonction
                    }else{
                        inistialisation( json, recipeRow); // Appeler la fonction
                    }
                }else{
                    inistialisation( json, recipeRow); // Appeler la fonction
                }
            });
        }
    })
    .catch(err => console.error('Erreur de récupération des données :', err));

function changeElement(cuisine, json, recipeRow) {
    recipeRow.innerHTML = ''; // Effacer le contenu précédent

    for (let i = 0; i < json.recipes.length; i++) {
        if (json.recipes[i].cuisine === cuisine) {
            const cardHtml = `
                <div class="col-md-3 mb-4">
                    <a href="detail.html?id=${json.recipes[i].id}" class="text-decoration-none text-dark" id="${json.recipes[i].id}">
                        <div class="card">
                            <img src="${json.recipes[i].image}" class="card-img-top" alt="Recipe Image">
                            <div class="card-body bg-custom">
                                <h5 class="card-title text-center">${json.recipes[i].name}</h5>
                                <p class="card-text text-center">${json.recipes[i].cuisine}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            recipeRow.innerHTML += cardHtml;
        }
    }
}

function inistialisation(json, recipeRow) {
    recipeRow.innerHTML = ''; // Effacer le contenu précédent

    for (let i = 0; i < json.recipes.length; i++) {
        const cardHtml = `
            <div class="col-md-3 mb-4">
                <a href="detail.html?id=${json.recipes[i].id}" class="text-decoration-none text-dark" id="${json.recipes[i].id}">
                    <div class="card">
                        <img src="${json.recipes[i].image}" class="card-img-top" alt="Recipe Image">
                        <div class="card-body bg-custom">
                            <h5 class="card-title text-center">${json.recipes[i].name}</h5>
                            <p class="card-text text-center">${json.recipes[i].cuisine}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
        recipeRow.innerHTML += cardHtml;
    }
}
