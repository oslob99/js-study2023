import gameData from "./game.js";
import {caseDown, caseUp, correctAnswer} from './checkAnswer.js'

// 정의부
export default function gameStart(iconCount) {

    const $numbers = document.getElementById('numbers');

    // 구슬을 100개 만들어야함
    const makeIcon = () => {
        // <div class="icon">1</div>
        for (let n = 1; n <= 100; n++) {
            const $icon = document.createElement('div');
            $icon.classList.add('icon');
            $icon.textContent = n;

            $icon.dataset.iconNumber = n;
            $numbers.appendChild($icon);
        }
    };

    makeIcon();
    // 아이콘에 클락 이벤트 부여
    $numbers.onclick = e => {
        if (!e.target.matches('#numbers .icon')) return;

        // console.log('구슬 클릭함');

        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        console.log(gameData.secret);

        // 정답 검증 함수
        checkNumber(e.target);
    };
}
