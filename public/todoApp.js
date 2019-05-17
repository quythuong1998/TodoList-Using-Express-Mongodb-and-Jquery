$(document).ready(function(){
    $.getJSON("/api/todos").then(renderTodos)
});

function renderTodos(todos){
    todos.forEach(function(todo){
        renderATodo(todo);
    })
}

function renderATodo(todo){
    const newTodo = $("<li class='task'>"  + todo.name + "</li>");
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);

    $('.list').append(newTodo);
}