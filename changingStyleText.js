"use strict"
const options=document.getElementsByTagName('select')[0];

const colors=document.getElementById('content');

document.getElementById('submit').addEventListener('click', changingStyle);
function changingStyle(){
    options.addEventListener('change' , event =>{ 
        
      
     if(options.value=="red"){
            return colors.classList.add('red');
        }
    
    else  if(options.value=="green"){
            return colors.classList.add('green');
        }
       
      else  if(options.value=="blue"){
            return colors.classList.add('blue');
        }
       
      else  if(options.value=="purple"){
            return colors.classList.add('purple');
        }
       
     else {

            return colors.classList.add('disabled')
      
      }
      
    })


}changingStyle();