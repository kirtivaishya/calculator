// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input")[0];
console.log(inputtext);
const buttons= document.querySelectorAll("button");
console.log(buttons);
let outputValue=inputtext.value;
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.value); 
            
            const buttonContent= button.innerText;
            if (outputValue!="") {
                outputValue=outputValue+buttonContent;
                inputtext.value=outputValue;
            } else {
                inputtext.value = button.innerText;
                outputValue=inputtext.value;
            } 
        });
});

 const reset=()=>{
     document.reset();
 }


