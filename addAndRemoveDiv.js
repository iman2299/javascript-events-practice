let addElement=document.getElementById('add-element');

 let newElements = document.getElementById('elements');
addElement.addEventListener('click', function() {
  newElements.insertAdjacentHTML("afterbegin",
`<div class="element">
<h3  id="x" >Element </h3>
<h4>This is an element</h4>
<button id="delete">Delete</button>
</div>`

)})







let removeElement=document.getElementById('elements');

let deleteElement = document.getElementById("delete");
removeElement.addEventListener('click', function(event){
    console.log(event.target.tagName)
if (event.target.tagName=="BUTTON"){
    event.target.parentElement.remove();
   


    


}

})