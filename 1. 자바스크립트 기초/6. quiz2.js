
var num = +prompt('양의 정수 입력');
var total = '';
for(var i=0; i<num; i++){
    if(i%2===0){
        total += '+';
    }else{
        total += '-';
    }
}
alert(`${total}`);