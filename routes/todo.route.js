const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todo.controller');

todoRouter.get('/', todoController.getTodo); // GET method /api/todos
todoRouter.post('/', todoController.createTodo); //POST method /api/todos

todoRouter.put('/:id', todoController.updateTodo); //PUT method /api/todos (UPDATE a todo)

module.exports = todoRouter;