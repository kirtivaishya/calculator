// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input");
const buttons= document.getElementsByClassName(".btn");
buttons.forEach(button => {
            
       button.addEventListener('click',(event)=>{
            event.preventDefault();           
            inputtext.value = button.innerText;
        });
});

 


