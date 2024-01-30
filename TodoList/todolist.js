$(document).ready(function(){
    $('#addTodoButton').on('click',addTodo);
    $('#todoInput').on('keydown',keyDown);
    $(document).on('click','.removeBtn' , removeTodo);
    $(document).on('click','.chchchch' , checkBox);
});

function checkBox(e) {
    
}

function removeTodo(event) {
    console.log(event)
    console.log(event.currentTarget)
    $(event.currentTarget).closest('li').remove();
}   

function keyDown(event) { 
    if (event.keyCode == 13) {
        addTodo();
    }
}

function addTodo() {
    const inputValue = $('#todoInput').val();
    if(inputValue == ''){
        alert('내용을 입력하세요!');
        return;
    }    
    $('#addTodo').append('<li>'+inputValue+'<button class="removeBtn">삭제</button></li>');
    $('#todoInput').val('');
}
