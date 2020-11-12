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

// CORRECTION

// let resultDiv = document.getElementById("resultDiv");

// let firstNumber = 100;
// const secondNumber = 2;


// while ((firstNumber / secondNumber) >= 1) {

//     let result = firstNumber / secondNumber;
//     firstNumber = result;

//     resultDiv.innerHTML += "<p>" + result + "</p>";
// }