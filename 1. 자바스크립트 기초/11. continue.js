

for( var i = 1; i<=10; i++){
    if(i % 2 === 0) continue;
    console.log(i);
}
console.log('반복문 종료!');

while(true){
    
    var n = +prompt('숫자 입력:');

    if (n === 0) break;
    else if( n ===1) continue;

    alert('메롱');
}
alert('끝');