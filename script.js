const list = document.querySelector(`ul`);
const input = document.querySelector(`input`);
const button= document.querySelector(`button`);

const buttonClick = function(){
    
console.log("hello")

const listItem = document.createElement(`li`);
const listText = document.createElement(`span`);
const listBtn = document.createElement(`button`);

listItem.appendChild(listText);
const novoPokemon = input.value;
input.value = ''

listText.textContent = novoPokemon;
input.focus();
listItem.appendChild(listBtn);
listBtn.textContent = "Excluir";

list.appendChild(listItem);
listItem.appendChild(listBtn);

listBtn.onclick = function(e){
    list.removeChild(listItem);
}

}