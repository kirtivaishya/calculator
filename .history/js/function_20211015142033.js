// **********Add the value to input ***********
const inputtext = document.getElementsByTagName("input");
const button= document.querySelectorAll(".btn");
for (const key in button) {
  //  if (Object.hasOwnProperty.call(object, key)) {
        const element = button[key];
       
        element.addEventListener('click',(event)=>{
            event.preventDefault();
           
            inputtext.value =  element.textContent;
        });
}

