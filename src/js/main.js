import loadAndDisplayDrinks from "./modules/loadAndDisplayDrinks";
import search from "./modules/search";
import reloadButton from "./modules/reloadButton";
import allCocktailsButton from "./modules/allCocktailsButton";

window.addEventListener('DOMContentLoaded', () => {
    loadAndDisplayDrinks();
    search();
    reloadButton();
    allCocktailsButton();
});