"use strict";

var calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
}; // **********Add the value to input ***********
//var inputtext = document.getElementsByTagName("input")[0]; //console.log(inputtext);

var buttons = document.querySelectorAll("button"); //console.log(buttons);
//var outputValue = inputtext.value;
//var currentOperator = "";
//var previousOperator = "";

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault(); //console.log(button.value); 

    var buttonContent = button.value;

    if (button.classList.contains("btn__el")) {
      reset();
      updateDisplay();
      return;
    }

    if (button.classList.contains("btn__el--backspace")) {
      backspace();
      updateDisplay();
      return;
    }

    if (button.classList.contains("btn__operation--prefix")) {
      prefix(button.value);
      updateDisplay();
      return;
    }

    if (button.classList.contains("btn__operation--percenatge")) {
      handlePercentage(button.value);
      updateDisplay();
      return;
    }

    if (button.classList.contains("btn__operation")) {
      handleOperator(button.value);
      updateDisplay();
      return; //   if (previousOperator != "") {
      //     var outputValues = outputValue.split(previousOperator);
      //     currentOperator = buttonContent;
      //     outputValue = calculate(outputValues[0], outputValues[1], previousOperator);
      //     updateDisplay()
      //     //inputtext.value = outputValue;
      //     // if (currentOperator != "=")
      //     outputValue = outputValue + currentOperator;
      //     previousOperator = currentOperator;
      //   } else {
      //     previousOperator = buttonContent;
      //     outputValue = outputValue + buttonContent;
      //     updateDisplay()
      //     //inputtext.value = outputValue;
      //   } // submit(operator);
    }

    if (button.name == "number") {
      //refactor to method input digit 
      inputDigit(button.value);
      updateDisplay();
      return; //   if (outputValue != "") {
      //     outputValue = outputValue + buttonContent;
      //    // inputtext.value = outputValue;
      //    updateDisplay()
      //   } else {
      //     //inputtext.value = button.innerText;
      //     updateDisplay()
      //     outputValue = inputtext.value;
      //   }
    }

    inputDigit(buttonContent);
    updateDisplay();
  });
}); //handle operator 

var handleOperator = function handleOperator(nextOperator) {
  var firstOperand = calculator.firstOperand,
      displayValue = calculator.displayValue,
      operator = calculator.operator;
  var inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    var result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = result;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}; //added method to enter digit 


var inputDigit = function inputDigit(digit) {
  var displayValue = calculator.displayValue,
      waitingForSecondOperand = calculator.waitingForSecondOperand;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}; //handle percentage 


var handlePercentage = function handlePercentage(Operator) {
  var firstOperand = calculator.firstOperand,
      displayValue = calculator.displayValue;

  if (firstOperand == null && !isNaN(displayValue)) {
    calculator.firstOperand = displayValue;
  }

  if (Operator === "%" && !isNaN(calculator.firstOperand)) {
    var result = calculate(calculator.firstOperand, displayValue, Operator);
    calculator.displayValue = result;
    calculator.firstOperand = result; //return;
  }
}; //backspace method 


var backspace = function backspace() {
  var displayValue = calculator.displayValue; //let arrString =[];

  if (displayValue != null && !isNaN(displayValue)) {
    displayValue = displayValue.substr(0, displayValue.length - 1); // arrString = Array.from(displayValue);
    // arrString.pop();
  }

  calculator.displayValue = displayValue;
  calculator.firstOperand = displayValue;
}; //refatored the update method 


var updateDisplay = function updateDisplay() {
  var display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
};

updateDisplay();

var reset = function reset() {
  //   inputtext.value = "";
  //   outputValue = "";
  //   previousOperator = "";
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  return;
};

var prefix = function prefix(operator) {
  var displayValue = calculator.displayValue; //let arrString =[];

  if (displayValue != null && !displayValue.includes("-")) {
    displayValue = "-" + displayValue; // arrString = Array.from(displayValue);
    // arrString.pop();
  } else {
    displayValue = displayValue.substr(1, displayValue.length);
  }

  calculator.displayValue = displayValue;
  calculator.firstOperand = displayValue;
}; //calculate function


var calculate = function calculate(firstOperand, secondOperand, operator) {
  firstOperand = parseFloat(firstOperand);
  secondOperand = parseFloat(secondOperand);

  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  } else if (operator === '%') {
    return firstOperand * 0.01;
  }

  return secondOperand;
};