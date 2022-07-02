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

    let deleteButton = document.createElement('button')
    deleteButton.appendChild(document.createTextNode(' x'));
    li.appendChild(deleteButton)
    deleteButton.addEventListener('click',()=>{
        li.remove()
        })
}

// function removethis(){
//     this.parentNode.remove()
// }