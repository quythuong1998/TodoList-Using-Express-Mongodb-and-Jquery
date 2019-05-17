const todoDB = require('../models/todo.model');

module.exports.getTodo = function(req, res){
    todoDB.find().then(todo => {
        res.json(todo);
    });
}