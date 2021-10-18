// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input")[0];
//console.log(inputtext);
const buttons= document.querySelectorAll("button");
//console.log(buttons);
let outputValue=inputtext.value;
let currentOperator="";
let previousOperator="";
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            //console.log(button.value); 
            
            const buttonContent= button.innerText;
            if(button.classList.contains("btn-el")){
                reset();
            }
            if(button.classList.contains("btn-operation")){
                if(previousOperator!=""){
                   const outputValues= outputValue.split(previousOperator);
                   currentOperator=buttonContent;
                   outputValue=calculate(outputValues[0],outputValues[1],previousOperator);
                   inputtext.value=outputValue;
                   outputValue=outputValue+currentOperator;
                   previousOperator=currentOperator;
                }else{
                    previousOperator=buttonContent;
                    outputValue=outputValue+buttonContent;
                    inputtext.value=outputValue;

                }
               // submit(operator);
            }
            if(button.name=="number"){
                if (outputValue!="") {
                    outputValue=outputValue+buttonContent;
                    inputtext.value=outputValue;
                } else {
                    inputtext.value = button.innerText;
                    outputValue=inputtext.value;
                } 

            }
           
        });
});

 const reset=()=>{
    inputtext.value="";
    outputValue="";
    previousOperator="";
    return;
 }

//  const submit=(operator)=>{

//         console.log("on sumbit");
//         return;
//  }

 function calculate(firstOperand, secondOperand, operator) {
     firstOperand=parseFloat(firstOperand);
     secondOperand=parseFloat(secondOperand);
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }else if (operator === '%') {
        return firstOperand*0.01;
      }
  
    return firstOperand;
  }
