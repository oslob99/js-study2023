

var pets = ['멍멍이', '야옹이', '쩝쩝이',];

// pets[pets.length] = '징징이';

pets.push('찡찡이');
var newLength =pets.push('어흥이','콩콩이');

console.log(pets);

// 맨 끝 데이터 삭제
// pets.pop();

pets.shift();

console.log(pets);


pets.unshift('짝짝이');
console.log(pets);