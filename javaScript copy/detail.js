const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');

// Utiliser l'ID de la recette pour récupérer les détails de la recette
fetch(`https://dummyjson.com/recipes/${recipeId}`)
    .then(res => res.json())
    .then(recipe => {

        const imageRect = document.getElementById("imageRect");
        const ingredientsList = document.getElementById("ingredientsList");

        imageRect.innerHTML = '';

        imageRect.innerHTML = `
            <div class=" mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card border-0" id="">
                            <img src="${recipe.image}" class="card-img-top img-custom" alt="Recipe Image">
                            <div class="card-body text-center">
                                <h5 class="card-title">${recipe.name}</h5>
                                <p class="card-text">Cuisine: ${recipe.cuisine}</p>
                                <p class="card-text">Difficulty: ${recipe.difficulty}</p>
                                <p class="card-text">Rating: ${recipe.rating} (${recipe.reviewCount} reviews)</p>
                                <p class="card-text">Servings: ${recipe.servings}</p>
                                <p class="card-text">Meal Type: ${recipe.mealType}</p>
                            </div>
                        </div>
        `;
        
        for (let i = 0; i < recipe.ingredients.length; i++) {
            const ingredient = document.createElement('li');
            ingredient.className = 'list-group-item';
            ingredient.className = 'border-0';
            ingredient.className = 'text-center';

            ingredient.textContent = recipe.ingredients[i];
            ingredientsList.appendChild(ingredient);
        }

        const instruction = document.getElementById("Instructions");

        for(let i = 0 ; i< recipe.instructions.length;i++){
          const textHtml =`<li class="list-group-item border-0 text-center">${recipe.instructions[i]}</li>`;
          instruction.innerHTML +=textHtml;
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des détails de la recette:', error);
    });
