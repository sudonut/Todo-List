//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //Clear INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    //DELETE TODO
    //If the click temporarily stored in memory is equal to the trash button value, then run todo remove.
    if (item.classList[0] === 'trash-btn'){
    // Creating a variable called todo which is equal to the parent element of the trash button
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    // CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    
}