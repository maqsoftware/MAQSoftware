$("#header").load("/header.html");

// Delegated handlers — survive any later re-render of #header content
$(document).on('click', '#header .icon-menu-hamburger', function() {
    var navbar = document.getElementById('navbar-right');
    if (navbar) navbar.classList.toggle('closed');
});
$(document).on('click', '#header .dismiss-button', function() {
    var navbar = document.getElementById('navbar-right');
    if (navbar) navbar.classList.toggle('closed');
});

// const hamburger = document.getElementById('icon-menu-hamburger');
// const navbar = document.getElementById('navbar');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('open');
//     navbar.classList.toggle('open');
//     console.log("printing");
// });

// const content = document.getElementById('main-content');
// content.classList.toggle('shift');