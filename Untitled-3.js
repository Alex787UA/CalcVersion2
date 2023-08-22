// Получаем ссылку на кнопку DEL
const delButton = document.getElementById('calc_last_delete');

// Получаем ссылку на поле ввода калькулятора
const inputField = document.getElementById('input-field');

// Добавляем обработчик события для кнопки DEL
delButton.addEventListener('click', () => {
    // Удаляем последний символ из поля ввода
    inputField.value = inputField.value.slice(0, -1);
});


document.addEventListener("DOMContentLoaded", () => {
  const resultField = document.querySelector("#result");
  const numButtons = document.querySelectorAll(".num");
  const operatorButtons = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const equalButton = document.querySelector(".equal");

  let currentInput = "";
  let currentOperator = "";
  let previousInput = "";

  numButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentInput += button.textContent;
      resultField.value = currentInput;
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (currentInput !== "") {
        if (previousInput === "") {
          previousInput = currentInput;
          currentInput = "";
        }
        currentOperator = button.textContent;
      }
    });
  });

  equalButton.addEventListener("click", () => {
    if (currentInput !== "" && currentOperator !== "" && previousInput !== "") {
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);
      let result;
      switch (currentOperator) {
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
      }
      resultField.value = result;
      previousInput = "";
      currentInput = result.toString();
      currentOperator = "";
    }
  });

  clearButton.addEventListener("click", () => {
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    resultField.value = "";
  });
});
