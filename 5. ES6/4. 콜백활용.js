const userList = [{
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbies: ['수영', '축구', '테니스'],
    },
    {
        account: 'kin24',
        userName: '길냥이',
        job: '노인',
        address: '서울',
        hobbies: ['배구', '축구', ],
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기도',
        hobbies: ['야구', '축구', '테니스', '영화'],
    },
    {
        account: 'fire',
        userName: '동글이',
        job: '게이머',
        address: '서울',
        hobbies: ['농구', '테니스'],
    },
];

// 회원목록에서 회원정보를 출력하는 함수
// function alertUserInfo(wannaSay) {

//     for (const user of userList) {
//         wannaSay(user);
//     }
// }

// alertUserInfo(function (u) {
//     console.log(`나는 ${u.userName}이올시다!`);
// });

// // 배열 고차 함수
// // forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
// userList.forEach((user) => {
//     console.log(user.address);
// });

// const numbers = [10, 20, 30, 40];
// let total = 0;
// numbers.forEach((k) => {
//     total += k;
// });
// console.log(total);

// // 취미가 딱 2개인 회원들만 필터링해서 새로운 배열에 담아줘

// function filter2Hobby(){

//     // 새로운 배열생성
//     const filteredArray = [];

//     for ( const user of userList){
//         if(user.hobbies.length === 2){
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

// // const newArray = filter2Hobby();
// // console.log(newArray);

// function filterUserLivedInSeoul(){

//     // 새로운 배열생성
//     const filteredArray = [];

//     for ( const user of userList){
//         if(user.address === '경기도'){
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

// // const newArray = filterUserLivedInSeoul();
// // console.log(newArray);

// //특정 필터 조건에 의해 필터링하는 함수
// function filter(condition){

//     // 새로운 배열생성
//     const filteredArray = [];

//     for ( const user of userList){
//         if(condition(user)){
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

// const newArray = filter(u => u.address === '서울');
// console.log(newArray);

// // 배열 고차함수 filter()
// // 특정 조건에 의해 필터링된 배열을 반환

// const numberArray = [1,2,3,4,5,6,7,8,9,10];

// const newArr = numberArray.filter(n => n%2 ===0);
// console.log(newArr);

// const user1 = userList.filter(user => user.account === 'abc1234');
// console.log(user1);

// // 배열 고차함수 map()
// // 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서
// // 매핑한 배열을 반환

// const doubles = numbers.map(n => n **2);
// console.log(doubles);

// const plusTwo = numberArray.map(n => n+2);
// console.log(plusTwo);

// const userNames = userList.map(user => user.userName);
// console.log(userNames);

//userList에서 원하는 프로퍼티 값을 매핑하는 함수
function myMap(a, condition) {

    const userLi = [];

    for (const i of a) {
        userLi.push(condition(i));
    }
    return userLi;
}

const userNames2 = myMap(userList, (user) => user.job);
console.log(userNames2);

const appleBasket = [{
        color: 'green',
        sweet: 13,
    },
    {
        color: 'red',
        sweet: 14,
    },
    {
        color: 'green',
        sweet: 11,
    },
    {
        color: 'red',
        sweet: 6,
    },
    {
        color: 'green',
        sweet: 3,
    },
    {
        color: 'green',
        sweet: 1,
    },
];

// 사과중 녹색이면서 당도가  9이상인 사과만 선별해
// 이 사과는 xxx색이며 당도가 xxx입니다.
// 라는 문자열이 모여있는 배열을 리턴

const mappedApples =
    appleBasket.filter(apple => apple.color === 'green' && apple.sweet >= 9)
    .map(apple => `이사과는 ${apple.color}색이면서 당도는 ${apple.sweet}임`);

console.log(mappedApples);

// 서울 사는 애들만 필터해서 첫번째 취미 매핑
const mappedUser =
    userList.filter(user => user.address === '서울')
    .map(user => `${user.address}살면서 첫번째 취미는 ${user.hobbies[0]}입니다`);

console.log(mappedUser);

const mappedUserr =
    userList.filter((user) => {
        return user.address === '경기도';
    })
    .map((user) => {
        return user.hobbies[2]
    });

console.log(mappedUserr);

userList // [{5}, {5}, {5}, {5}]
    .filter(user => user.address === '서울') // [{5}, {5}, {5}]
    .map(user => ({
        firstHobby: user.hobbies[0],
        name: user.userName
    })) // ['', '', '']
    .forEach(info => {
        console.log(`${info.name}회원의 첫번째 취미는 ${info.firstHobby}입니다.`);
    });