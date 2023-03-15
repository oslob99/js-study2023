

var num1 = +prompt('첫번째 숫자 입력');
var num2 = +prompt('두번째 숫자 입력');
var total = 0;


if(num1 <= num2){
    for (var i=num1; i<= num2; i++){
    total += i;
    }
    alert(`${num1}${num2}까지의 누적합 : ${total}`);
}
else{
    for (var i=num1; i>= num2; i--){
        total += i;
        }
        alert(`${num1} ~ ${num2}까지의 누적합 : ${total}`);
}
