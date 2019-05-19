$(document).ready(function(){
    $.getJSON("/api/todos").then(renderTodos);

    //event click button ADD
    $("#buttonAdd").click(function(){
        createTodo();
    })
});

function renderTodos(todos){
    todos.forEach(function(todo){
        renderATodo(todo);
    })
}

function renderATodo(todo){
    const newTodo = $("<li class='task'>"  + todo.name + "<span> X </span>" + "</li>" );
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);

    $('.list').append(newTodo);
}

function createTodo(){
    const todoContent = $('#todoContent').val();
    $.post('/api/todos', {name: todoContent})
    .then(function(newTodo){
        $('#todoContent').val(''); //set empty after create new Todo
        renderATodo(newTodo);
    })   
}