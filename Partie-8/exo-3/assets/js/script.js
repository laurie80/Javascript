let para = document.getElementById('para');

para.onmouseover = function (e) {
    e.preventDefault();
    para.style.visibility = "hidden";
}

para.onmouseout = function (e) {
    e.preventDefault();
    para.style.visibility = "visible";
}

// CORRECTION POSSIBLE DE DAMIEN
// let para = document.querySelectorAll('p');

// para.forEach(element => {
//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 10) {
//             element.classList.add('visible');
//         } else {
//             element.classList.remove('visible');
//         }
//     })
// })

