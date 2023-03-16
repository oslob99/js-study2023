alert('~~~~~~재밌는 UP&DOWN 게임~~~~~~\n' +
    '                 \n[ 난이도 설정]\n' +
    '[ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]');
var level = +prompt('난이도 입력 >>');
var rd1;    var rd2;
var quest = 1;  var answer;

while(quest < 6){
    switch(level) {
        case 1 :
        rd1 = Math.floor(Math.random() * 100) + 1;
        rd2 = Math.floor(Math.random() * 100) + 1; break;
        case 2 : 
        rd1 = Math.floor(Math.random() * 50) + 1;
        rd2 = Math.floor(Math.random() * 50) + 1; break;
        default : 
        rd1 = Math.floor(Math.random() * 20) + 1;
        rd2 = Math.floor(Math.random() * 20) + 1; break;
    }
    var rd = Math.floor(Math.random() * 3) + 1;
    if(rd === 1){
        answer = +prompt(`Q${quest}.  ${rd1} + ${rd2} = ??\n>>`);
        if(answer === (rd1+rd2)) alert('오정답');
        else alert('떙!');
    }
    else if(rd === 2){
        answer = +prompt(`Q${quest}.  ${rd1} - ${rd2} = ??\n>>`);
        if(answer === (rd1-rd2)) alert('오정답');
        else alert('떙!');
    }
    else {
        answer = +prompt(`Q${quest}.  ${rd1} * ${rd2} = ??\n>>`);
        if(answer === (rd1*rd2)) alert('오정답');
        else alert('떙!');
    }
    quest++;
}



