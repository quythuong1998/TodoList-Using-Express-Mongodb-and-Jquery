$(document).ready(function(){
    $.getJSON("/api/todos").then(renderTodos);

    //event when click button ADD
    $("#buttonAdd").click(function(){
        createTodo();
    })

    $('#todoContent').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#buttonAdd').click();//Trigger buttonAdd click event
        }
    });

    //event when click on todo (li - element) 
    $('.list').on('click', 'li', function(){
        updateTodo($(this));
    })

    //event when click on delete (span - element)
    $('.list').on('click', 'span', function(event){
        event.stopPropagation(); //Stop the click event from bubbling to parent elements (just click event current element)
        deleteTodo($(this).parent());
    })
});

function renderTodos(todos){
    todos.forEach(function(todo){
        renderATodo(todo);
    })
}

function renderATodo(todo){
    const newTodo = $("<li class='task'>"  + todo.name + "<span class='delete'> X </span>" + "</li>" );
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed == true){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

function createTodo(){
    const todoContent = $('#todoContent').val();
    if(todoContent == ""){
        alert('You must write something !');
        return;
    }
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
    }).then(function(updatedTodo){
        todo.toggleClass('done');
        todo.data('completed', isDone)
    })
}

function deleteTodo(todo){
    var url = 'api/todos/' + todo.data('id');
    $.ajax({
        method: 'DELETE',
        url
    }).then(function(todoDeleted){
        todo.remove();
    })
}
