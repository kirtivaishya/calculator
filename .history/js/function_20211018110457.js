// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input")[0];
console.log(inputtext);
const buttons= document.querySelectorAll("button");
console.log(buttons);
let outputValue="";
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.value); 
            
            const buttonContent= button.innerText;
            if (buttonContent!="") {
                outputValue=buttonContent+""+outputValue;
                inputtext.value=outputValue;
            } else {
                inputtext.value = button.innerText;
            } 
        });
});

 


