

const userNames = ['김철스', '강감찬', '박영희'];

const [kim, kang, park] = userNames;

console.log(kim);
console.log(kang);
console.log(park);

const [firstObj] = [{ id: 1},{ id: 2},{id: 3}].filter(obj => obj.id >= 2);
console.log(firstObj.id);

// 변수 교환하기
let first = 10, second = 20;

[second, first] = [first, second];

console.log(first);
console.log(second);

// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다
const numbers = [1,3,5,7,9,11];

const [one, three, ...others] = numbers;

// const copyNumbers = numbers.slice();

// const one = copyNumbers.shift();
// const three = copyNumbers.shift();
// const others = copyNumbers;

console.log(one);
console.log(three);
console.log(others);

// 스프래드로 배열 간편복사

const foods = ['감튀', 'QPC','징거버거'];

// const copyFoods = foods;
const copyFoods = [...foods];

foods[0] = '콜라';
console.log(foods);
console.log(copyFoods);
