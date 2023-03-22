
const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};
/*
const { empName, birthDay, age} = emp;

console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay}입니다`);
*/

const { empName: en, birthDay: bd, age: a} = emp;

console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다`);

const {birthDay, age, ...rest} = emp;

console.log(birthDay);
console.log(age);
console.log(rest);

//객체 안전복사 : 스프레드
const copyEmp = {...emp,
    adress: '서울',
    hobbies: ['놀고','자기']
};

console.log(copyEmp);