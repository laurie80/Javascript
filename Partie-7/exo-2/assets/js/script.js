function bold () {
    document.getElementById("text").style.fontWeight="bold";
}

function color () {
    document.getElementById("text").style.color="blue";
}

function zoom () {
    document.getElementById("text").style.fontSize="2rem";
}

// CORRECTION EN CSS
// .textBold {
//     font-weight: bold;
// }

// .redTextColor {
//     color: red;
// }

// .textSize {
//     font-size: 1.5rem;
// }

// CORRECTION JS
// let buttonBold = document.getElementById('buttonBold');
// let buttonColor = document.getElementById('buttonColor');
// let buttonSize = document.getElementById('buttonSize');
// let textBold = document.querySelector('div');

// buttonBold.onclick = function () {
//     textBold.classList.toggle('textBold'); .toogle sert à faire basculer la fonction à son état d'origine
// }

// buttonColor.onclick = function () {
//     textBold.classList.toggle('redTextColor');
// }

// buttonSize.onclick = function () {
//     textBold.classList.toggle('textSize');
// }