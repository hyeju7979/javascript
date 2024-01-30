// 1. alert 창 띄우기
function checkBox(e) {
    if($(".checkRun").is(":checked")){
        alert("체크박스 체크했음!");    
    }else{
        alert("체크박스 체크 해제!");
    }
}


// 2. console.log 띄우기
function checkBox(e) {
    if($(".checkRun").is(":checked")){
        console.log('우이씨!! 취소선이 안 나온다!');
    }else{
        console.log('도대체 왜 안 나오냐!!!')
    }
}



// 3. style 직접 입력
function checkBox(e) {
    if($(".checkRun").is(":checked")){
        $(this).parent().css ('text-decoration','line-through');       
    }else{
        $(this).parent().css ('text-decoration','');
    }
}