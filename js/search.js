// Search Api
const searchLoad = () => {
   const serInput = document.getElementById('input-field');
   const serValue = serInput.value;
   console.log(serValue);

    serInput.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serValue}`;
    fetch(url)
        .then(res =>res.json())
        .then(data =>displaySearchResult(data.meals))


}

// Card Display
const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('card-fish-id');
    for (const meal of meals) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card " style="width: 18rem; margin-bottom: 20px ">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)
        }</p>
                    <a href="${meal.strSource}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;

        searchResult.appendChild(div);

        console.log(meals)

    }

}