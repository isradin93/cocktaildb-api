import loadAndDisplayDrinks from "./loadAndDisplayDrinks";

let formTimeout = null;

const search = () => {
    const form = document.querySelector('.search-form');
    const input = form.querySelector('input');

    form.addEventListener('input', e => {
        e.preventDefault();
        const value = input.value || '';

        if (formTimeout) {
            clearTimeout(formTimeout);
        }

        formTimeout = setTimeout(() => {
            formTimeout = null;
            loadAndDisplayDrinks(value);
        }, 1500);
    });
};

export default search;