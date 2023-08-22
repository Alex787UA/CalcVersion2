//  Получаем доступ к элементам страницы

const DeleteButton = document.querySelector("#delete");
const ClearAllButton = document.getElementById("ClearAll");
const ResultButton = document.querySelector("#result");
const number  = document.querySelector("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const display =  document.querySelector(`#display`);


let displayValue = '';
let currentOperator = '';
let numArray = [];

function appendToDisplay(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
        numArray.push(parseFloat(displayValue));
        displayValue = '';
        currentOperator = operatorButtons;
      }


function updateDisplay() {

  display.textContent = displayValue;





}
// Вешаем обработчики событий
operatorButtons.forEach(button => {
  button.addEventListener('click', function() {
    appendOperator(button.getAttribute("data-operator"));
  });
});V

DeleteButton.addEventListener('click', function() {
  displayValue = numArray.pop();
  
});

ClearAllButton.addEventListener('click', function() {
    displayValue = '';
    numArray = [];
    currentOperator = '';
    updateDisplay();

});
ResultButton.addEventListener('click', calculate);

function calculate() {
numArray.push(parseFloat(displayValue));
let result = numArray[0];
for (let i = 1; i < numArray.length; i++) {switch (currentOperator) {
    case '+':
      result += numArray[i];
        break;
    case '-':
      result -= numArray[i];
        break;
    case '*':
             result *= numArray[i];
        break;
    case '':
        result = numArray[i];
        break;
}
}
      displayValue = result.toString();
      numArray = [];
      currentOperator = '';
      updateDisplay();
      }

      