import { SERVER } from "./env.js";

let todos = [];

// returns all todo from the server
function getAllTodo() {
  fetch(SERVER)
    .then((data) => data.json())
    .then((serverdata) => {
      todos = serverdata;

      console.log(todos);
    })
    .catch((err) => {
      console.log(err.message);
    });
}


function addNewTodo() {
  const title = prompt("Enter the title of the todo");

  fetch(SERVER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
   .then((data) => data.json())
   .then((todoList) => {
      console.log(todoList);
      todos = todoList

    })
   .catch((err) => {
      console.log(err.message);
    });
}


document.querySelector('button').addEventListener('click', () => {
  addNewTodo()
})


getAllTodo();
