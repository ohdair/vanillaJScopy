const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";
// const HIDDEN_CLASSNAME = "hidden";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target;
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
  saveToDos(toDos);
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.innerText = newTodo.text;
  li.addEventListener("dblclick", deleteToDo);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const paresedToDos = JSON.parse(savedToDos);
  toDos = paresedToDos;
  paresedToDos.forEach(paintToDo);
}
