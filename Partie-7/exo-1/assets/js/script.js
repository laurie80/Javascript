let container = document.getElementById("container");

function calcul() {
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let total = firstNumber * secondNumber;
  let result = document.createElement('p');
  result.innerHTML = total;
  container.appendChild(result);
}

  