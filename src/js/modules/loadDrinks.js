import settings from './settings';
import errorHandler from './errorHandler';

let eventCreated = false;

const loadDrinks = async value => {
    const cocktailContainer = document.querySelector('.cocktail-container');
    cocktailContainer.innerHTML = '';

    if (!eventCreated) {
        eventCreated = true;
        cocktailContainer.addEventListener('click', e => {
            const id = e.target.parentElement.dataset.id;

            const cocktails = JSON.parse(localStorage.getItem('jsonData') || { drinks: [] });
            const selectedCocktail = cocktails.drinks.filter(nextDrink => nextDrink.idDrink === id)[0];

            // set single drink info
            const drinkImage = document.querySelector('.drink-img');
            const drinkName = document.querySelector('.drink-name');
            const drinkDescription = document.querySelector('.drink-desc');
            const drinkIngredients = document.querySelector('.drink-ingredients');

            const list = [
                selectedCocktail.strIngredient1,
                selectedCocktail.strIngredient2,
                selectedCocktail.strIngredient3,
                selectedCocktail.strIngredient4,
                selectedCocktail.strIngredient5,
                selectedCocktail.strIngredient6,
                selectedCocktail.strIngredient7,
                selectedCocktail.strIngredient8,
                selectedCocktail.strIngredient9,
                selectedCocktail.strIngredient10,
                selectedCocktail.strIngredient11,
                selectedCocktail.strIngredient12,
                selectedCocktail.strIngredient13,
                selectedCocktail.strIngredient14,
                selectedCocktail.strIngredient15,
            ];

            drinkImage.src = selectedCocktail.strDrinkThumb;
            drinkName.textContent = selectedCocktail.strDrink;
            drinkDescription.textContent = selectedCocktail.strInstructions;
            drinkIngredients.innerHTML = list
                .map(item => {
                    if (!item) return;
                    return `<li><i class="far fa-check-square"></i>${item}</li>`;
                })
                .join("");

            // show single drink info
            const header = document.querySelector('.header');
            const searchForm = document.querySelector('.search-form');
            const cocktailsList = document.querySelector('.cocktails');

            header.classList.add('header-hidden');
            searchForm.classList.add('search-form-hidden');
            cocktailsList.classList.add('cocktails-hidden');

            const singleDrink = document.querySelector('.single-drink');
            singleDrink.classList.remove('single-drink-hidden');
        });
    }

    const loader = document.querySelector('.loading');
    loader.classList.remove('hide-loading');

    const loaderHasHideClass = loader.classList.contains('hide-loading');

    try {
        const data = await fetch(`${settings.url}${value || ''}`);
        const jsonData = await data.json();
        if (!loaderHasHideClass) {
            loader.classList.add('hide-loading');
        }
        localStorage.setItem('jsonData', JSON.stringify(jsonData));
        return jsonData;
    } catch (e) {
        if (!loaderHasHideClass) {
            loader.classList.add('hide-loading');
        }
        errorHandler('Oops! Something went wrong. Try again later.', true);
    }
};

export default loadDrinks;