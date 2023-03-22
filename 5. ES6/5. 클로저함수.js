
//자바스크립트의 함수는 함수를 리턴할 수 있음
/*
function calulator(n1, n2){

    function add(){
        return n1+n2;
    }
    return add;
}
*/
// const calulator = (n1, n2) => () => n1+n2;
/*
function calulator(n1, n2){
    return () => n1 + n2;
}

const zzz = calulator(10, 20);
console.log(typeof zzz);

const n = zzz();
console.log(n);
*/
/*
let count = 0;

// 카운트를 올리는 함수
const increase = () => ++count;

console.log(increase);
console.log(increase);

count = 999;

console.log(increase);
*/
/*
const increase = () => {
    let count = 0;
    return ++count;
};

console.log(increase());
console.log(increase());
console.log(increase());
*/
/*
const increaseClosure = () => {

    let count = 0;

    return () => ++count;
};

const increaser = increaseClosure();
console.log(increaser());
console.log(increaser());
console.log(increaser());
*/

//즉시 실행 함수 : 정의와 동시에 호출
const result = (function(n1, n2) {
    return n1 + n2;
})(5,8);

console.log(result);

const increase = (() => {
    let count = 0;

    return () => ++count;
    })();
    