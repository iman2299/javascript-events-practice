
let num1 =document.getElementById('value1');
let result = document.getElementById('result');
let num2 = document.getElementById('value2');
let oper = document.getElementById('operators');


    document.getElementById('calculate').addEventListener('click', function(){

        if (oper.value === '+'){
            result.value = +num1.value + +num2.value ;
            

        }
        
      if (oper.value === '-'){
            result.value = +num1.value - +num2.value;

        }
       

if (oper.value === '*'){
            result.value = +num1.value * +num2.value;

        }


 if (oper.value === '/'){
    result.value = +num1.value / +num2.value;

}
 if(isNaN(num1.value + num2.value)) { 
alert("Value   must be a number")
}


    })
