let ul = document.querySelector('ul')
let input = document.querySelector('#todo')

let button = document.querySelector('#add')

button.addEventListener('click',(input)=>{
     createListItem(input)
})

function createListItem(){
    let li = document.createElement('li')
    //  li.textContent = input
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ""
}