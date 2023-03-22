// var sentence = '<ul>\n\t<li>\n\t\t<a>ddd</a>';
// var sentence = `
// <ul>
//     <li>
//         <a>hhh</a>
//     </li>
// </ul>`;

// console.log(sentence);

// var month = 4;
// var day =5;
// var anniversary = '식목일';

// var message = month + '월 ' + day + '일은 ' + anniversary +'입니다';

// var message = `${month}월 ${day}일은 ${anniversary}입니다`;

function sum(a) {

    return (b) => a + b;

    // return add();
    // return add;
}

const total = sum(1)(3);
// console.log(total);

let x = 1;

function func() {
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    var x = 2;
}

func();

/* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/

// function inBetween(start, end) {
//     let total=[];
//     function between() {
//         for (let a of arr) {
//             if (a >= start && a <= end) {
//                 total.push(a);
//             }
//             return total;
//         }
//     }
//     return between;
// }




let arr = [1, 2, 3, 4, 5, 6, 7];

// function k() {

//     function z(w) {
//         return console.log(w);
//     }
//     return z;
// }

// const k = () => w =>console.log(w);
// arr.forEach( k());

// arr.forEach( w => console.log(w));
const ww = function(w){
    return console.log(w);
}
console.log(typeof ww());
// arr.forEach( ww);

// for (let i = 0; i < arr.length; i++) {
//     arr[i]
// }

function inBetween(start, end) {

    function between(arrr) {
        return arrr >= start && arrr <= end;
    }
    return between;
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6


// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// console.log(message);