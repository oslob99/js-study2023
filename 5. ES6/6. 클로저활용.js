/*
const increase = (() => {
    let count  = 0;
    return () => ++count;
})();

const decrease = (() => {
    let count  = 0;
    return () => --count;
})();

console.log(increase());
console.log(increase());
console.log(decrease());
*/
/*
function counterClosuer() {

    let count = 0;

    function increase(){
        return ++count;
    }
    function decrease(){
        return --count;
    }

    return {increase,decrease,};
}

const counter = counterClosuer();

const increase = counter.increase;
const decrease = counter.decrease;

console.log(increase());
console.log(increase());
console.log(decrease());
*/
/*
const counter = (() => {

    let count = 0;

    return {
        increase: () => ++count,
        decrease: () => --count,
    };
})();

const { increase, decrease} = counter;

console.log(increase());
console.log(increase());
console.log(decrease());
*/
/*
function counterWithCbClosure(){
    let count = 0;

    function process(callback){
        
        return counter = callback(count);
    }
    return process;
}

const counter_ = counterWithCbClosure();

console.log(counter_(c => ++c));
console.log(counter_(c => c += 3));
console.log(counter_(c => c ** 2));
*/
const counter_ = (() => {
    let count = 0;
    return (callback) => counter = callback(count);
})();

console.log(counter_(c => ++c));
console.log(counter_(c => c += 3));
console.log(counter_(c => c ** 2));

/*
function ade(){
    let a = 0;
    function ed(cal){
        return cal(a);
    }
    return ed;
}
const aw = ade();
const bb = aw(function(a){
    return a += 3;
});

console.log(bb);
*/