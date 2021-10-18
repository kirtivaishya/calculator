// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input");
const buttons= document.querySelectorAll("button");
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.value); 
            inputtext.value = button.value;
        });
});

 


