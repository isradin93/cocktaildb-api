import loadDrinks from './loadDrinks';
import showDrinks from './showDrinks';

const loadAndDisplayDrinks = async searchValue => {
    const loadedDrinks = await loadDrinks(searchValue);
    showDrinks(loadedDrinks);
};

export default loadAndDisplayDrinks;