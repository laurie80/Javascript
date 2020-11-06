const text = document.getElementById("text");
const pinkButton = document.getElementById("pinkButton");
const blueButton = document.getElementById("blueButton");
const purpleButton = document.getElementById("purpleButton");
const strongButton = document.getElementById("strongButton");
const italicButton = document.getElementById("italicButton");

pinkButton.onclick = function chgColor() {
    document.getElementById("pinkButton").style.backgroundColor='pink';
    document.getElementById("text").style.color='pink';
}

blueButton.onclick = function chgColor() {
    document.getElementById("blueButton").style.backgroundColor='blue';
    document.getElementById("text").style.color='blue';
}

purpleButton.onclick = function chgColor() {
    document.getElementById("purpleButton").style.backgroundColor='#EE82EE';
    document.getElementById("text").style.color='#EE82EE';
}

strongButton.onclick = function chgColor() {
    document.getElementById("strongButton").style.fontWeight="bold";
    document.getElementById("text").style.fontWeight="bold";
}

italicButton.onclick = function chgColor() {
    document.getElementById("italicButton").style.fontStyle="italic";
    document.getElementById("text").style.fontStyle="italic";
}

// const text = document.getElementById("text");
// const button = document.getElementById("button");


// button.onclick = function chgColor() {
//     if (button.value == button.value) {
//     document.getElementById("button").style.backgroundColor='pink';
//     document.getElementById("text").style.color='pink';
// }
// else{
//     document.getElementById("button").style.backgroundColor='blue';
//     document.getElementById("text").style.color='blue';
// }
// else{
//     document.getElementById("button").style.backgroundColor='#EE82EE';
//     document.getElementById("text").style.color='#EE82EE';
// }
// else{
//     document.getElementById("button").style.fontWeight="bold";
//     document.getElementById("text").style.fontWeight="bold";
// }
// else{
//     document.getElementById("button").style.fontStyle="italic";
//     document.getElementById("text").style.fontStyle="italic";
// }
// }