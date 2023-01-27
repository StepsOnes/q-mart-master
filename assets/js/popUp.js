const popUpButtons = Array.from(document.querySelectorAll('.popUp-button'));
const popUpWrapper = Array.from(document.querySelectorAll('.form-popup__wrapper'));
const closeSendFormButtons = Array.from(document.querySelectorAll('.popup-form__send__close'));
const body = document.body;

document.addEventListener('keydown', exit);

popUpButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const form = document.getElementById(button.dataset.form);
        form.classList.add('visible');
        bodyLock();
    });
});

closeSendFormButtons.forEach((button) => {
    button.addEventListener('click', getInitialIndicators);
});

popUpWrapper.forEach(item => {
    item.addEventListener('click', exit)
})

function exit(e) {
    const shouldExit =
        [...e.target.classList].includes('form-popup__wrapper') ||
        e.target.className === 'close-button' ||
        e.keyCode === 27;

    if (shouldExit) {
        document.querySelectorAll('.form-popup__wrapper').forEach(item => {
            item.classList.remove('visible');
        });
        bodyUnLock();
        getInitialIndicators();
    }
}

function bodyLock() {
    body.classList.add('lock')
}

function bodyUnLock() {
    body.classList.remove('lock')
}


function getInitialIndicators() {
    bodyUnLock()

    document.querySelectorAll('.form-popup__wrapper').forEach(item => {
        item.classList.remove('visible');
    });

    document.querySelectorAll('.popup-form__send').forEach(item => {
        item.classList.remove('visible');
    });

    document.querySelectorAll('.popup-form').forEach(item => {
        item.classList.remove('not-visible');
    });
}

