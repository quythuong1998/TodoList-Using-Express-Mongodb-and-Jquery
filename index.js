const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoList', {useNewUrlParser: true});

app.get('/', (req, res) => res.sendFile(__dirname + "/views/" + 'index.html'));
app.use(express.static('public'));


const todoRoute = require('./routes/todo.route');
app.use('/api/todos', todoRoute);






app.listen(port, () => console.log(`Todo app listening on port ${port}!`))