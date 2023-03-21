

// 정수 n을 전달면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n){
    for(let i=1;i<=n; i++){
        if(i % 2 === 0) console.log(i);
    }
}

function showOddNumber(n){
    for(let i=1;i<=n; i++){
        if(i % 2 === 1) console.log(i);
    }
}

function showOddOREvenNumber(n, delim){
    for(let i=1;i<=n; i++){
        if(i % 2 === delim) console.log(i);
    }
}

function showMultipleNumber(n, mutliNumber){
    for(let i=1;i<=n; i++){
        if(i % mutliNumber === 0) console.log(i);
    }
}

const code = function(n){
    return n % 3 === 0;
};

function showNumber(n, code){
    for(let i=1;i<=n; i++){
        if(code(i)) console.log(i);
    }
}

showNumber(20, (n) => {return n % 3 === 0;});

// showEvenNumber(15);
// showOddNumber(10, 0);

function showMessage(message, howTO){

    // 공통
    document.body.style.background = 'gray';

    setTimeout(()=>{
        // 개별
    howTo(message);
    },500);
    
    // 공통
    alert('하하호호');
}
showMessage('메롱', function(m){
    alert(m);
});