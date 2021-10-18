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
            const buttonContent= button.innerText
            if (typeof(buttonContent)=="number") {
                outputValue=inputtext.value+""+outputValue;
            } else {
                outputValue=inputtext.value+""+outputValue;
            }
            inputtext.value = button.innerText;
        });
});

 


