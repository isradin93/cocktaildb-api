const allCocktailsButton = () => {
    const button = document.querySelector('.all-cocktails-button');
    button.addEventListener('click', () => {
        const header = document.querySelector('.header');
        const searchForm = document.querySelector('.search-form');
        const cocktailsList = document.querySelector('.cocktails');

        header.classList.remove('header-hidden');
        searchForm.classList.remove('search-form-hidden');
        cocktailsList.classList.remove('cocktails-hidden');

        const singleDrink = document.querySelector('.single-drink');
        singleDrink.classList.add('single-drink-hidden');
    });
};

export default allCocktailsButton;