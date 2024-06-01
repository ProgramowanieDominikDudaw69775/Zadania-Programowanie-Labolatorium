function calculateResult() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Wprowadź poprawne liczby.");
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  document.getElementById("result-display").innerText = "Wynik: " + result;
  alert("Wynik: " + result);
}

function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").value = "+";
  document.getElementById("result-display").innerText = "Wynik: 0";
}
