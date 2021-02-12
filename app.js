//selectors
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

//Event listener

todoButton.addEventListener("click", addTodo);

//functions

function addTodo(event) {
  event.preventDefault();
  if (todoInput.value == "") {
    alert("Field Is Empty Please return any value");
    return;
  } else {
    // todo div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo", "toggleTodo");

    //check mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"> </i>';
    completeButton.classList.add("complete-btn");
    tododiv.appendChild(completeButton);

    // checked element
    completeButton.addEventListener("click", checkedElement);
    function checkedElement() {
      tododiv.classList.toggle("toggleTodo");
    }

    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    tododiv.appendChild(trashButton);

    //remove element
    trashButton.addEventListener("click", trashElement);
    function trashElement() {
      todoList.removeChild(tododiv);
    }

    // create li
    const newtodo = document.createElement("li");
    newtodo.classList.add("todo-item");

    newtodo.innerText = todoInput.value;
    tododiv.appendChild(newtodo);
    //append to list
    todoList.appendChild(tododiv);
    //clear todo input
    todoInput.value = "";
  }
}
