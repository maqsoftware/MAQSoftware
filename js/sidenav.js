$("#header").load("/header.html", function() {
    $('#header .icon-menu-hamburger').on('click', function() {
      // console.log('Nav item clicked in header!');
        const navbar = document.getElementById('navbar-right');
        navbar.classList.toggle('closed');
    });
    $('#header .dismiss-button').on('click', function() {
      // console.log('Dismiss clicked!');
        const navbar = document.getElementById('navbar-right');
        navbar.classList.toggle('closed');
    });
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