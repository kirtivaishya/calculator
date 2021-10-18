// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input")[0];
console.log(inputtext);
const buttons= document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.value); 
            let outputValue="";
            const buttonContent= button.innerText;
            if (buttonContent!=0) {
                outputValue=buttonContent+""+outputValue;
                inputtext.value=outputValue;
            } else {
                inputtext.value = button.innerText;
            } 
        });
});

 


