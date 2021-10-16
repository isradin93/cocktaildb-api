import loadAndDisplayDrinks from "./loadAndDisplayDrinks";

const reloadButton = () => {
    const reloadButton = document.querySelector('.try-again-button');
    const form = document.querySelector('.search-form');
    const input = form.querySelector('input');

    if (!reloadButton) {
        return;
    }

    reloadButton.addEventListener('click', e => {
        e.preventDefault();
        const value = input.value;
        loadAndDisplayDrinks(value);
    });
};

export default reloadButton;