const todoDB = require('../models/todo.model');
const bodyParser = require('body-parser');

module.exports.getTodo = function(req, res){
    todoDB.find().then(todo => {
        res.json(todo);
    });
}

module.exports.createTodo = function(req, res){
    var content = req.body;
    todoDB.create(content).then(function(newTodo){
        res.status(201).json(newTodo) //A REST API responds with the 201 status code whenever a resource is created inside a collection.
    })
}

module.exports.updateTodo = function(req, res) {
    todoDB.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
}

module.exports.deleteTodo = function(req, res){
    todoDB.remove({_id: req.params.id})
    .then(function(){
        res.json({message: 'Deleted!'})
    })
}