$(document).ready(function(){
    $('#addTodoButton').on('click',addTodo);
    $('#todoInput').on('keydown',keyDown);
    $(document).on('click','.removeBtn' , removeTodo);
    $(document).on('click','.checkRun' , checkBox);
});

function checkBox(e) {
    /*
    if($(".checkRun").is(":checked")){
        $(this).parent().css('text-decoration','line-through');       
    }else{
        $(this).parent().css('text-decoration','');
    }
    */
    if($(".checkRun").is(":checked")){
        $(this).parent().addClass('strikethrough');       
    }else{
        $(this).parent().removeClass('strikethrough');
    }
}

function removeTodo(event) {
    console.log(event);
    console.log(event.currentTarget);
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

    // 특수문자 정규식 변수(공백 미포함)
    const replaceChar = /[~!@\#$%^&*\()\-=+_'\;<>0-9\/.\`:\"\\,\[\]?|{}]/gi;
 
    // 완성형 아닌 한글 정규식
    const replaceNotFullKorean = /[ㄱ-ㅎㅏ-ㅣ]/gi;

    $("#todoInput").on("focusout", function() {
        var x = $(this).val();
        if (x.length > 0) {
            if (x.match(replaceChar) || x.match(replaceNotFullKorean)) {
                x = x.replace(replaceChar, "").replace(replaceNotFullKorean, "");
            }
            $(this).val(x);
        }
        }).on("keyup", function() {
            $(this).val($(this).val().replace(replaceChar, ""));

   });

    $('#addTodo').append('<li><input type="checkbox" class="checkRun">'+inputValue+'<button class="removeBtn">삭제</button></li>');
    $('#todoInput').val('');
}
