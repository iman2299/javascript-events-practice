"use strict"
let num1 = Number(document.getElementById('value1').value)||0;
let num2 = Number(document.getElementById('value2').value)||0;
let oper = document.getElementById('operators').value;
function calculator(){
    document.getElementById('calculate').addEventListener('click', event=>{ 

        if (oper === '+'){
            document.getElementById('result').value = num1 + num2 ;
            

        }
        
      else  if (oper === '-'){
            document.getElementById('result').value = num1 - num2;

        }
       

else if (oper === '*'){
            document.getElementById('result').value = num1 * num2;

        }


else if (oper === '/'){
    document.getElementById('result').value = num1 / num2;

}

else{
    alert("Value X must be a number");
}

    })

};





calculator();