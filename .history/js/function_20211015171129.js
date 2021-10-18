// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input")[0];
console.log(inputtext);
const buttons= document.querySelectorAll("button");
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.value); 
            inputtext.value = button.value;
        });
});

 


