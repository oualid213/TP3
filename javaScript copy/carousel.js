fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(json => {
        const scrolBoots = document.getElementById("scrol-boots");
        let htmlContent = "";
        console.log(json.recipes);

        for (let i = 0; i < 5; i++) {
            const randomIndex = getRandomIntInclusive(0, json.recipes.length - 1);
            const textHtml = `<div class="carousel-item">
                <img class="d-block img-custom" src="${json.recipes[randomIndex].image}" alt="Recipe Image">
            </div>`;
            htmlContent += textHtml;
        }

        scrolBoots.innerHTML = htmlContent;
        scrolBoots.firstElementChild.classList.add('active');

    })
    .catch(err => console.error('Error fetching data:', err));

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
