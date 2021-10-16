const errorHandler = (errorTitle = '', showTryAgainButton = false) => {
    const title = document.querySelector('.error-title');
    const button = document.querySelector('.try-again-button');

    if (title) {
        title.textContent = errorTitle;
    }
    if (button) {
        const ifButtonHidden = button.classList.contains('try-again-button-hidden');

        if (showTryAgainButton && ifButtonHidden) {
            button.classList.remove('try-again-button-hidden');
        }
        if (!showTryAgainButton && !ifButtonHidden) {
            button.classList.add('try-again-button-hidden');
        }
    }
};

export default errorHandler;