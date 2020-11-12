let container = document.getElementById("container");

function calcul() {
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let total = firstNumber * secondNumber;
  let result = document.createElement('p');
  result.innerHTML = total;
  container.appendChild(result);
}

// CORRECTION
// let paragraphe = document.createElement('p');
// let submitButton = document.getElementById('submitButton');

// submitButton.onclick = function (e) {
//   e.preventDefault();
//   let firstNumber = document.getElementById('firstNumber').value;
//   let secondNumber = document.getElementById('secondNumber').value;
//   let result = firstNumber * secondNumber;
//   document.getElementById('result').appendChild(paragraphe).innerHTML = result;
// }
  