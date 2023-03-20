function add(n1, n2) {

    return n1 + n2; // 탈출문

}

// 반환값 : 함수 호출 이후에 함수밖으로 전달되는 값
add(5, 7);

// 안쪽으로 쭉가서 실행, 같은레벨끼리는 왼쪽부터 실행
var r2 = add(add(2, 3), add(add(3, 4), add(6, 2)));

//리턴이 없는 함수(void함수)
function multi(n1, n2) {
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

// 리턴이 없는 함수는 변수에 담지말고, 다른 함수에 인수로 전달 x
multi(10, 3);

// return 탈출문
function callName(nickName) {
    var prohibits = ['멍청이', '돌아이', '홍길동'];

    if(prohibits.includes(nickName)){
        console.log(`이놈아!!`);
        return;
    }
    console.log(`${nickName} 하이`);
}

callName('멍청이');

function stopLoop(){

    while(true){
        var flag = prompt('명령어 입력')
        if(flag === '멈춰'){
            break;
        }
        alert(flag);
    }
    alert('수교용');
}
stopLoop();
