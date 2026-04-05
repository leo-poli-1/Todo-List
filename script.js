const todoContainer=document.querySelector("#todos")
const input=document.querySelector("#todos-input")
const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const todoDiv=document.createElement('div')
    
    const textDiv=document.createElement('p')
    textDiv.innerText=input.value
    
    const editButton=document.createElement('button')
    editButton.innerText="Edit"
    editButton.setAttribute("id","edit-button")

    const deleteButton=document.createElement('button')
    deleteButton.innerText="Delete"
    deleteButton.setAttribute("id","delete-button")

    todoDiv.appendChild(textDiv)
    todoDiv.appendChild(editButton)
    todoDiv.appendChild(deleteButton)
    todoContainer.appendChild(todoDiv)

    form.reset() 
})

todoContainer.addEventListener("click",(e)=>{

    if(e.target.getAttribute("id")==="delete-button"){
        todoContainer.removeChild(e.target.parentNode)
    }else if(e.target.getAttribute("id")==="edit-button"){
        editTodo(e)
    }
})

function editTodo(event){
    const parent= event.target.parentNode 
    const children = parent.children
    const textDiv = children[0] ///am obtinut <p>
    const editButton = children[1] 
    const deleteButton = children[2] 

    const editInput=document.createElement("input")
    editInput.value=textDiv.innerText

    parent.removeChild(textDiv)

    parent.prepend(editInput)
}