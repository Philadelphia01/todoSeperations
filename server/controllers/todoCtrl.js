const db = require("../db/db.js");

const getAllTodo = async (request, response) => {
  try {
    const results = await db.query("SELECT * FROM tasks");
    response.json(results.rows);
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: "Server Error" });
  }
};

const addNewTodo = async (request, response) => {
  const { title } = request.body;

  if (!title) {
    return response.status(400).json({ message: "title is required" });
  }

  const todo = {
    id: todos.length + 1,
    title,
    isCompleted: false,
  };

  todos.push(todo);

  const results = await db.query("SELECT * FROM tasks");
  response.json(results.rows);
};

const deleteTodo = async (request, response) => {
  response.json({ message: "delete" });
};

const updateTodo = async (request, response) => {
  response.json({ message: "Update" });
};

module.exports = { getAllTodo, addNewTodo, deleteTodo, updateTodo };
