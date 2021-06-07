"use strict"
let options=document.getElementsByTagName('select')[0];
let colors=document.getElementById('content');
let submit=document.getElementById('submit');
options.addEventListener('change' , function(){
if(options.value===""){
submit.classList.add("disabled")
}else{
    submit.classList.remove("disabled")
}
}
)
function remove (e){
    e.preventDefault();
if(options.value==="red"){
colors.classList.add("red")
}
}
submit.addEventListener("click",function (e){
    e.preventDefault();
if(options.value==="red"){
colors.className="red"
}
if(options.value==="green"){
    colors.className="green"
}
if(options.value==="blue"){
    colors.className="blue"
    }
    if(options.value==="purple"){
        colors.className="purple"
    }

})