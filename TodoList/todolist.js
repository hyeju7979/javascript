$(document).ready(function(){
    $('#addTodoButton').on('click',addTodo);
    $('#todoInput').on('keydown',keyDown);
    $(document).on('click','.removeBtn' , removeTodo);
    $(document).on('click','.checkRun' , checkBox);

    // 셀랙트박스 대신 input 추가
    $('#slctCat').on('keydown',keyDown);
});


function checkBox(e) {
    /*
    if($(".checkRun").is(":checked")){
        $(this).parent().css('text-decoration','line-through');       
    }else{
        $(this).parent().css('text-decoration','');
    }
    */

    //$(this).closest('li').toggleClass('strikethrough');  

    if($(this).is(":checked")){
        $(this).closest('li').addClass('strikethrough');       
    }else{
        $(this).closest('li').removeClass('strikethrough');
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
    const categoryValue = $('#slctCat').val();

    if(inputValue == ''){
        alert('내용을 입력하세요!');
        return;
    }    
 
    // 완성형 아닌 한글 정규식
    const regNumber = /[0-9]/gi;
    if(regNumber.test(inputValue)){
        alert('숫자들어가면 안돼!!!');
        $('#todoInput').val('');
        return;
    }
    
    $('#addTodo').append('<li><input type="checkbox" class="checkRun"> ['+categoryValue+'] '+inputValue+' <button class="removeBtn">삭제</button></li>');
    $('#todoInput').val('');
    // $('#slctCat').val('');
    // $('#todoInput').prop('disabled', true);
    /** 
    
        1. 인풋 앞에 셀렉트 박스를 추가한다.
        2. 이 셀렉트 박스는 두가지인데 1)카테고리 2)집안일 3)회사일
        3. 카테고리를 선택하고 할일을 입력한 후 추가하면
        4. 결과로 [카테고리] 입력한 내용
        5. 만약 카테고리를 선택하지 않고 추가를 하면 경고창을 띄워준다.


    */
}
