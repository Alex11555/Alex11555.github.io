const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

// Deschide meniul
menuOpenButton.addEventListener('click', () => {
    document.body.classList.add("show-mobile-menu");
});

// Închide meniul
menuCloseButton.addEventListener('click', () => {
    document.body.classList.remove("show-mobile-menu");
});

