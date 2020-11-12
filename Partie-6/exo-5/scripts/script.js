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

// "Correction Thomas"

// let resultDiv = document.getElementById("resultDiv");

// const firstNumber = 2;
// let secondNumber = 2;


// while ((firstNumber * secondNumber) <= 250) {

//     let result = firstNumber * secondNumber;
//     secondNumber = result;

//     resultDiv.innerHTML += "<p>" + result + "</p>";
// }

