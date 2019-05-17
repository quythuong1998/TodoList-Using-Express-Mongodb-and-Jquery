const mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name can not be empty'
    },
    dateCreate:{
        type: Date,
        default: Date.now
    },
    completed:{
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema, 'Todo');
module.exports = Todo;