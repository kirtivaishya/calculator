// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input");
const buttons= document.querySelectorAll(".btn");
buttons.forEach(button => {
     //  if (Object.hasOwnProperty.call(object, key)) {
       // const element = button[key];
       
       button.addEventListener('click',(event)=>{
            event.preventDefault();
           
            inputtext.value =  button.textContent;
        });
});
 


