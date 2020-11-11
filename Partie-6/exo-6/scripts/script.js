let container = document.getElementById("container");

let firstNumber = 10;
let secondNumber = 5;
let total = firstNumber / secondNumber;

while (total > 1) {
    let result = document.createElement('p')
    result.innerHTML = total;
    container.appendChild(result);

    firstNumber = total;
    total = firstNumber / secondNumber;
}