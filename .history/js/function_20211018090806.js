// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input")[0];
console.log(inputtext);
const buttons= document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.value); 
            const outputValue;
            const buttonContent= button.innerText
            if (typeof(buttonContent)=="number") {
                inputtext.value
            } else {
                
            }
            inputtext.value = button.innerText;
        });
});

 


