// let container = document.getElementById("container");

// let firstNumber = 6;
// let secondNumber = 2;
// let result = firstNumber*secondNumber;

// while (result < 250) {
// let result = document.createElement("span");
// result.innerHTML = result;
// container.appendChild(result);
// }

let container = document.getElementById("container");

let firstNumber = 5;
let secondNumber = 10;
let total = firstNumber*secondNumber;

while (total < 250) {
    let result = document.createElement('p')
    result.innerHTML = total;
    container.appendChild(result);

    secondNumber = total;
    total = firstNumber * secondNumber;
}



