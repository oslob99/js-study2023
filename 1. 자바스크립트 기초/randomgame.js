alert('~~~~~~재밌는 UP&DOWN 게임~~~~~~\n' +
    '                 \n[ 난이도 설정]\n[ 1. 상 (기회 3번 | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]');
var level = +prompt('난이도 입력 >>');
var life;
if (level === 1) life = 3;
else if (level === 2) life = 6;
else life = 10;

var rd = Math.floor(Math.random() * 50) + 1;
alert(`[ 1 ~ 50 사이의 무작위 숫자를 ${life}번 안에 맞춰보든가!!! ]\n${rd}`);
var max = 1;
var last = 50;
while (true) {
    var num = +prompt('숫자입력 >>');
    life--;
    if (rd > num) {
        alert(`UP!!\n기회가 ${life}번 남았습니다.\n
        ${num} ~ ${last}`);
        max = num;
    } else if (rd < num) {
        alert(`DOWN!!\n기회가 ${life}번 남았습니다.\n
        ${max} ~ ${num}`);
        last = num;
    } else {
        alert('딩동댕!');
        break;
    }
    if (life === 0) {
        alert('기회 벌써 다씀 수고용');
        break;
    }
}