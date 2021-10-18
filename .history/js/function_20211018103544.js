// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input")[0];
console.log(inputtext);
const buttons= document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.value); 
            const outputValue=0;
            const buttonContent= button.innerText;
            if (outputValue!=0) {
                outputValue=inputtext.value+""+outputValue;
            } else {
                inputtext.value = button.innerText;
            }
            
        });
});

 


