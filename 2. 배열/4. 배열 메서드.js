

var foodList = ['닭꼬치','볶음밥','짜장면','족발'];

var count = 0;
var targer = '짜장면';

// for(var food of foodList){
//     if(food === targer){
//         break;
//     }
//     count++;
// }

// console.log(`찾은 인덱스 : ${count}`);

// indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색
// var index = foodList.indexOf(targer);
// console.log(`찾은 인덱스 : ${index}`);

// slice() : 배열을 일정 부분 짤라냄 사본배열을 반환
foodList.push('오뎅','순대국밥');

console.log(foodList);

var sliceFoods = foodList.slice(1,4);
console.log(sliceFoods);

//reverse() : 배열역순으로 배치, 원본이 변함
console.log('====================');

var nums = [10,20,30,40,50];
var copyNums = nums.slice();

copyNums.reverse();
console.log(copyNums);

//concat() : 배열 2개 연결

console.log('=================');

var arr1 = [10,20,30];
var arr2 = [100,200,300,1000];

var concatedArr = arr1.concat(arr2);

console.log(concatedArr);

//includes() : 배열의 특정 데이터가 존재하는지 확인

console.log('====================');
var resultFlag = foodList.includes('닭꼬치');
console.log(resultFlag);


// splice () : 배열의 특정요소 제거, 삽입
console.log('=================');

console.log(foodList);

foodList.splice(1, 2);

console.log(foodList);

foodList.splice(0,1,'보쌈');

foodList.splice(1,0,'마라탕');
console.log(foodList);