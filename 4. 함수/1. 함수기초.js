
// 함수 정의 -만든다
function happyGreeting(yourName){
    console.log(`${yourName} 하이루`);
    console.log('방가');
}

// 함수 호출 - 사용한다
happyGreeting('bororo');

function makeLine(){
    console.log('=============');
}

function calcAreaCircle(r){
    const PI = 3.14159265;
    var area = PI * r ** 2;
    return area;
}

var r1 = calcAreaCircle(5);
console.log(r1);
