

var money = 3000;

var food = money >= 5000 ? '볶음밥' : (money >= 3000) ? '라면' : '굶름';

if( money >= 2000){
    food = '라면';
}
else {
    food = '삼각김밥';
}
console.log(`선택한 음식 : ${food}`);