// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input")[0];
console.log(inputtext);
const buttons= document.querySelectorAll("button");
console.log(buttons);
let outputValue=inputtext.value;
let operator="";
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.value); 
            
            const buttonContent= button.innerText;
            if(button.classList.contains("btn-el")){
                reset();
            }
            if(button.classList.contains("btn-operation")){
                submit(operator);
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
    return;
 }

 const submit=(inputtext)=>{

        console.log("on sumbit");
        return;
 }

 function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
