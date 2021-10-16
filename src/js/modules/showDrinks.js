import errorHandler from './errorHandler';

const showDrinks = ({ drinks }) => {
    const cocktailContainer = document.querySelector('.cocktail-container');

    if (!drinks || !drinks.length) { // напитков нету
        errorHandler('Oops! No drinks were loaded!', false);
        return;
    }

    const joinedDrinkTags = drinks.map(({ idDrink: id, strDrink: name, strDrinkThumb: image }) => (
        `<div class="cocktail-card">
            <article class="cocktail" data-id="${id}" >
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
            </article>
        </div>`
    )).join('');

    cocktailContainer.innerHTML = joinedDrinkTags;
    errorHandler('', false);

    return cocktailContainer;
};

export default showDrinks;