// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input");
const buttons= document.getElementsByName("button");
buttons.forEach(button => {

       button.addEventListener('click',(event)=>{
            event.preventDefault();          
            console.log(button.innerText); 
            inputtext.value = button.innerText;
        });
});

 


