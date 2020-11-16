// // let nav = document.getElementById("navigation");
// let button = document.getElementsByClassName("navbar-toggler");
// let navItem = document.getElementsByClassName("nav-item active");
// let navLink = document.getElementsByClassName("nav-link");

// button.onclick = function () {
   
    
// }
// // utiliser "scrollIntoView" avec paramètres "behavior" de valeur "smooth"

var fables = document.querySelectorAll('a');

fables.forEach(fable => {
    fable.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(fable.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});