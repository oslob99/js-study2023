
var per = +prompt('게임 인원 (2 ~ 4명)으로 적어라이 ==> ');//인원수 등록
var people = []; // 플레이어 이름 배열
var i = 1; // 플레이어 순서

    while(per>0){
    people.push(prompt(`${i}번 플레이어 이름을 쓰레이`));    
    i++;
    per--;
    }//각 플레이어 이름을 people배열에 저장

    alert(`[ ${people} ] 참가해부러쓰!`); //참가 인원 이름 출력

    // 플레이어 입장 완료

    var bullet = +prompt('실탄 개수 (1 ~ 5개) ==> ');
    var bullets = [0, 0, 0, 0, 0]; 
    var bulletEnd = 0; // 총알 갯수와 배열 선언

    var perRd = Math.floor(Math.random()*people.length)+1;//순서 무작위
    var nextPlayernum = perRd-1; // 다음 플레이어 배열인덱스
    var nextPlayer = ''; //다음 플레이어

    alert(`총을 받아부러쓰! ${people[nextPlayernum]} 부터 시작한다이~`);

    while(true){
        nextPlayer = people[nextPlayernum];// 다음 플레이어 이름
        alert(`[${nextPlayer}의 턴!] 탄창 회전중... \n#엔터 누르거나 닫기 누르면 쏜다이!`);
        
        while(true){
            var bulletRd = Math.floor(Math.random()*5)+1;// 총알 위치 무작위
            if(bullets[bulletRd-1] === 0){bullets[bulletRd-1] = 1;}
            else{continue;} // 총알 위치 무작위로 넣은 뒤 중복이면 다시 넣기
            bulletEnd++;
            if(bulletEnd === bullet){break;}// 총알 갯수가 다 들어가면 종료
        }//5개의 탄창에 총알 무작위 위치에 넣기

        //alert(`${bullets} dd`); 탄창배열 잘 들어갔는지 확인용

        if(bullets[0] === 1){
            alert(`# BANG!! [ ${nextPlayer} ] 바윙~`);
            people[nextPlayernum] = '';
            bullet--; nextPlayernum++; bulletEnd--;
        }// 총에 맞았을 때 
        else{
            bullets = [0, 0, 0, 0, 0];
            bulletEnd = 0;
            alert('이걸 사네.. 까비용~');
            nextPlayernum++;
        }// 총에 맞지 않았을 때

        if(nextPlayernum === people.length){
            nextPlayernum = 0;
        }// 다음 순서로 넘어갈때 다음 인덱스가 없을 시 0번째로

        if(bullet === 0) {
            alert(`게임 끝!\n[ ${people} ] 생존!!!!`);
            break;
        }// 게임종료, 생존한 인원들 출력

    }// 러시안룰렛 게임 끝날때까지 반복





