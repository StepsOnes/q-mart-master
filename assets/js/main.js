const menuItems = Array.from(document.querySelectorAll('.menu-item'));

document.getElementById('menu-btn').addEventListener("click", showMenu);
document.addEventListener('scroll', onScroll);

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', hideMenu);
});

function showMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('visible');
}

function hideMenu() {
    let menu = document.getElementById('menu');
    menu.classList.remove('visible');
}

function spawnAnimation() {
    const stepsCards = Array.from(document.querySelectorAll('.step-card'));
    let cardCounter = 0;

    let timerId = setInterval(() => {
        stepsCards[cardCounter].classList.add('visible');
        cardCounter++;

         if(cardCounter >= stepsCards.length) {
            clearInterval(timerId);
        }
    }, 1200);
}

function onScroll() {
    const elem = document.getElementById('company-steps');
    const posTop = elem.getBoundingClientRect().top;

    if(posTop + elem.clientHeight <= window.innerHeight && posTop >= 0) {
        spawnAnimation();
        document.removeEventListener('scroll', onScroll);
    }
}

function inputMask() {
    let element1 = document.getElementById('footer_phone');
    let element2 = document.getElementById('popup_phone-01');
    let element3 = document.getElementById('popup_phone-02');
    let element4 = document.getElementById('popup_phone-03');
    let element5 = document.getElementById('popup_phone-04');

    let maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };

    let mask = IMask(element1, maskOptions);
    let mask2 = IMask(element2, maskOptions);
    let mask3 = IMask(element3, maskOptions);
    let mask4 = IMask(element4, maskOptions);
    let mask5 = IMask(element5, maskOptions);
}

const gridElement = document.querySelector('.grid');
let msnry = new Masonry( gridElement, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 20,
    gutter: 40,
    percentPosition: true,
});

inputMask();


// Form-validation
const closeForm = (element) => {
    event.target.closest('.popup-form').classList.add('not-visible');
    document.getElementById(element).classList.add('visible');
}

const clearValues = () => {
    document.querySelectorAll('.popup-inp').forEach(item => item.value = "");
}


const ERROR_ClASS = 'error-inp';
const popUpInputs = Array.from(document.querySelectorAll('.popup-inp'));

popUpInputs.forEach(input => {
    input.onfocus = () => {
        input.classList.remove(ERROR_ClASS);
    };
});

const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const NAME_REGEXP = /[А-Яа-я]{2,10}/;

const isEmailValid = (email) => {
    return EMAIL_REGEXP.test(email);
}

const isNameValid = (name) => {
    return NAME_REGEXP.test(name);
}

const isPhoneValid = (phone) => {
    return phone.length === 18
}

const addError = (element) => {
    return element.classList.add(ERROR_ClASS);
}

const popUpForm_01 = document.getElementById('popUp-form_01');
popUpForm_01.addEventListener('submit', (event) => {
    event.preventDefault();
    const popupName_01 = document.getElementById('popup_name-01');
    const popupPhone_01 = document.getElementById('popup_phone-01');
    const popupEmail_01 = document.getElementById('popup_email-01');

    if (!isNameValid(popupName_01.value)) {
        addError(popupName_01);
        return false
    }

    if (!isPhoneValid(popupPhone_01.value)) {
        addError(popupPhone_01);
        return false
    }

    if (!isEmailValid(popupEmail_01.value)) {
        addError(popupEmail_01);
        return false
    }

    closeForm('fs1');
    clearValues();
});

const popUpForm_02 = document.getElementById('popUp-form_02');
popUpForm_02.addEventListener('submit', (event) => {
    event.preventDefault();
    const popupName_02 = document.getElementById('popup_name-02');
    const popupPhone_02 = document.getElementById('popup_phone-02');
    const popupEmail_02 = document.getElementById('popup_email-02');

    if (!isNameValid(popupName_02.value)) {
        addError(popupName_02);
        return false
    }

    if (!isPhoneValid(popupPhone_02.value)) {
        addError(popupPhone_02);
        return false
    }

    if (!isEmailValid(popupEmail_02.value)) {
        addError(popupEmail_02);
        return false
    }

    closeForm('fs2');
    clearValues();
});

const popUpForm_03 = document.getElementById('popUp-form_03');
popUpForm_03.addEventListener('submit', (event) => {
    event.preventDefault();
    const popupName_03 = document.getElementById('popup_name-03');
    const popupPhone_03 = document.getElementById('popup_phone-03');
    const popupEmail_03 = document.getElementById('popup_email-03');

    if (!isNameValid(popupName_03.value)) {
        addError(popupName_03);
        return false
    }

    if (!isPhoneValid(popupPhone_03.value)) {
        addError(popupPhone_03);
        return false
    }

    if (!isEmailValid(popupEmail_03.value)) {
        addError(popupEmail_03);
        return false
    }

    closeForm('fs3');
    clearValues();
});


const popUpForm_04 = document.getElementById('popUp-form_04');
popUpForm_04.addEventListener('submit', (event) => {
    event.preventDefault();
    const popupName_04 = document.getElementById('popup_name-04');
    const popupPhone_04 = document.getElementById('popup_phone-04');
    const popupEmail_04 = document.getElementById('popup_email-04');

    if (!isNameValid(popupName_04.value)) {
        addError(popupName_04);
        return false
    }

    if (!isPhoneValid(popupPhone_04.value)) {
        addError(popupPhone_04);
        return false
    }

    if (!isEmailValid(popupEmail_04.value)) {
        addError(popupEmail_04);
        return false
    }

    closeForm('fs4');
    clearValues();
});


