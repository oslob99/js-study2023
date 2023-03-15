

var age = Math.floor(Math.random()*100) + 1;

// 공식 : x이상 y이하의 정수 난수

// Math.floor(Math.random()* (y - x + 1)) + x

alert(`age: ${age}`);
// var age = +prompt('당신의 나이는?');

// alert(`내 나이: ${age + 1}실`);

if(age > 19) {
    alert('성인');
}else{alert('미성년자')}