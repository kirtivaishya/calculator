const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

// **********Add the value to input ***********
//var inputtext = document.getElementsByTagName("input")[0]; //console.log(inputtext);

var buttons = document.querySelectorAll("button"); //console.log(buttons);

var outputValue = inputtext.value;
var currentOperator = "";
var previousOperator = "";
buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault(); //console.log(button.value); 

    var buttonContent = button.value;

    if (button.classList.contains("btn__el")) {
      reset();
    }

    if (button.classList.contains("btn__operation")) {
      if (previousOperator != "") {
        var outputValues = outputValue.split(previousOperator);
        currentOperator = buttonContent;
        outputValue = calculate(outputValues[0], outputValues[1], previousOperator);
        updateDisplay()
        //inputtext.value = outputValue;
        // if (currentOperator != "=")
        outputValue = outputValue + currentOperator;
        previousOperator = currentOperator;
      } else {
        previousOperator = buttonContent;
        outputValue = outputValue + buttonContent;
        updateDisplay()
        //inputtext.value = outputValue;
      } // submit(operator);

    }

    if (button.name == "number") {
      if (outputValue != "") {
        outputValue = outputValue + buttonContent;
       // inputtext.value = outputValue;
       updateDisplay()
      } else {
        //inputtext.value = button.innerText;
        updateDisplay()
        outputValue = inputtext.value;
      }
    }
  });
});

//refatored the update method 
const updateDisplay=()=>{
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();

var reset = function reset() {
  inputtext.value = "";
  outputValue = "";
  previousOperator = "";
  return;
}; //  const submit=(operator)=>{
//         console.log("on sumbit");
//         return;
//  }


function calculate(firstOperand, secondOperand, operator) {
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
  } else if (operator === '=') {
    return firstOperand;
  }

  return secondOperand;
}