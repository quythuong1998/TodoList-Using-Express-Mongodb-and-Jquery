const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todo.controller');

todoRouter.get('/', todoController.getTodo); // GET  /api/todos

module.exports = todoRouter;