// 두 개의 랜덤한 숫자 1~100까지를 연산한다
// 연산은 '+,-,*,/'이며 문제 마다 랜덤하게 아론다

// alert('사칙연산 게임 시작');

var quizNumber = 1;
var total; var success = 0;  var fail = 0; var sign;
var hap = '+', cha = '-', gob = '*', na = '/';

main: while(true){
    randomFist = Math.floor(Math.random() * 10) + 1;
    randomSecond = Math.floor(Math.random() * 10) + 1;

    var randomSign = Math.floor(Math.random() *4) + 1;

    sub: switch (randomSign){
        case 1 : sign = hap; total = randomFist + randomSecond; break;
        case 2 : if(randomFist <= randomSecond) continue main;
                    sign = cha; total = randomFist - randomSecond; break;
        case 3 : sign = gob; total = randomFist * randomSecond; break;
        default : if((randomFist / randomSecond) === 0){continue main; }
                    sign = na; total = randomFist / randomSecond; break;
    }//switch end(빼기와 나누기일때는 앞 랜덤숫자가 더 크게!)

    var answer = +prompt(`Q${quizNumber}. ${randomFist} ${sign} ${randomSecond} = ??\n>>`);

    if(answer === total){
        alert('이걸 맞춰?');
        success++;
    }else if(answer === 0){
        alert('그래 포기하는게 더 좋을 수도..');
        break;
    }
    else{
        alert('이걸 틀려?');
        fail++;
    }
    if(quizNumber === 10){
        alert(`끝났다이\n정답횟수: ${success}회, 틀린횟수: ${fail}`);
        break;
    }
    quizNumber ++; // 한 문제씩 퀴즈번호 올라감
}// each loop