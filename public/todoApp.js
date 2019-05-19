$(document).ready(function(){
    $.getJSON("/api/todos").then(renderTodos);

    //event click button ADD
    $("#buttonAdd").click(function(){
        createTodo();
    })

    $('.list').on('click', 'li', function(){
        updateTodo($(this));
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

function updateTodo(todo){
    var url = 'api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateStatus = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url,
        //dataType: 'html',
        data: updateStatus
    }).then(function(updateTodo){
        todo.toggleClass('done');
        todo.data('Completed', isDone)
    })
}