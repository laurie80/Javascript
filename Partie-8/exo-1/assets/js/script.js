// CORRECTION NICOLAS

let toTop = document.getElementById('text');
toTop.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// CORRECTION THOMAS

// //fonction qui rend le bouton du scroll visible
// document.addEventListener('DOMContentLoaded', function() {
//     window.onscroll = function(ev) {
//       document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";

      
//     };
//   });

//   //fonction qui permet au bouton scroll de remonter lentement
//   const links = document.querySelectorAll("a");
 
// for (const destination of links) {
// 	destination.addEventListener("click", clickHandler);
// }
 
// function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   const offsetTop = document.querySelector(href).offsetTop;
 
//   scroll({
//     top: offsetTop,
//     behavior: "smooth"
//   });
// }

