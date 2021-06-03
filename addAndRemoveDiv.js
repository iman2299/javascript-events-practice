"use strict"
let addElement=document.getElementById('add-element');
function addElements(){
 
addElement.addEventListener('click', event =>
{ document.getElementById('elements').innerHTML = 
`<div class="element">
<h3  id="x" >Element </h3>
<h4>This is an element</h4>
<button id="delete">Delete</button>
</div>`;
})
  

}addElements()



let removeElement=document.getElementById('elements');
function removeElements(){
 
removeElement.addEventListener('click', event =>
{ removeElement.parentNode.removeChild(removeElement);
})
  

}removeElements()