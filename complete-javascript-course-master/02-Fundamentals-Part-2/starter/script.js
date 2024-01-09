'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log ('I can drive :D');

// 함수
console.log (`
--- 함수 --- `)

console.log (`○ 코드의 재사용`)

function logger () {
    console.log ('My name is Jonas');
}
logger ();
logger ();
logger ();

console.log (`○ 매개 변수 응용`);

function fruitProcessor (apples, oranges) { //매개 변수
    // console.log (apples, oranges);
    const juice = `Juice wth ${apples} apples🍎 and ${oranges} oranges🍊.`;
    return juice;
}
// fruitProcessor (5,0); //인수

const appleJuice = fruitProcessor (5, 0);
console.log (appleJuice);

const appleOrangeJuice = fruitProcessor (2, 4);
console.log (appleOrangeJuice);


// 유형1
console.log (`
--- 유형1 ---`)

function calcAge1 (birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1 (1991);
console.log (age1);


/* 
function 변수1 (매개변수) {
    return 기준값 + - * / 매개변수;
}
const 변수2 = 변수1 (인수);
console.log (변수2); 

함수 선언을 function 위에 할 수 있다.
const age1 = calcAge1 (1991);
*/



// 유형2
console.log (`
--- 유형2 ---`)

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2 (1991);
console.log (age2);

/* 
const 변수1 = function (매개변수) {
    return 기준값 + - * / 매개변수; 
}
const 변수2 = 변수1 (인수);
console.log ();

함수 선언을 function 위에 할 수 없다.
const age1 = calcAge1 (1991);
*/


// 유형3 화살표 기능
console.log (`
--- 유형3 ---`)

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

/* 
const 변수1 = 매개변수 => 기준값 사칙연산 매개변수;
const 변수2 = 변수1(인수);
console.log(변수2); 
*/


/* 
const yearsUltRetirement = birthYear => 2037 - birthYear;
const retirement = yearsUltRetirement(1991);
console.log(retirement); 
*/

// 유형3 변형 (코드가 한 줄 이상인 경우)

console.log (`
--- 유형3 변형 (코드가 한 줄 이상인 경우) ---`)

/* 
const yearsUltRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    console.log (age,retirement);
    return retirement;
    
}
console.log(yearsUltRetirement(1991));


const yearsUltRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}


console.log(yearsUltRetirement(1991, 'Jonas'));
console.log(yearsUltRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) { 
    const applePieces = cutFruitPieces (apples);
    const orangePieces = cutFruitPieces (oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges🍊.`;
    return juice;
}
console.log (fruitProcessor(2, 3));
*/


// 문제 :  아래 유형을 정규형으로 바꾸시오.

 /* const yearsUltRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
} */


const yearsUltRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    if(retirement > 0) {
        console.log(`은퇴가 ${retirement}년 남았네요`);
        return retirement;
    } else {
        console.log('은퇴가 지났네요');
        return retirement;
    }
}



// 유형1. 함수 선언 : function으로 시작하였으므로 함수 선언은 상위에 선언한다.
/* function yearsUltRetirement (birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
} */


const test = yearsUltRetirement(1950,'park');
console.log(test)

// 공식
/* 
function 변수1 (매개변수) {
    return 기준값 사칙연산 매개변수;
}
const 변수2 = 변수1 (인수);
console.log (변수2); 
*/


// 유형2. 함수식 : const로 시작하였으므로 함수 선언은 상위에 올수 없다.
/* const yearsUltRetirement = function (birthYear, firstName) {
    return `${firstName} retires in ${retirement} years.`
}
const age = 2037 - birthYear;
const retirement = 65 - age;

console.log (age, retirement);  */

// 데이터 구조
    const friend1 = 'Michael';
    const friend2 = 'Steven';
    const friend3 = 'Peter';

// 배열
    const friends = ['Michael', 'Steven', 'Peter'] ;
    console.log(friends);
    
    // const friends = new Array('Michael', 'Steven', 'Peter');
    // console.log(friends);

    const years = new Array(1948, 1977, 1979, 1981, 2024);
    console.log(years);

    console.log(friends[0], friends[2]);
    console.log(years[3], years[4]);


    console.log(friends. length, years. length);

    console.log(friends[friends. length -1], years[years. length -1]);

    friends[2] = 'Jay';
    console.log(friends);



    const firstName = 'Jonas'
    // const jonas = ['Jonas', 'Schmedtmann', 2024 - 1979, 'teacher', firends];
    const jonas = [firstName, 'Schmedtmann', 2024 - 1979, 'teacher', friends];
    console.log(jonas);

    const calcAge = function (birthYeah) {
        return 2037 - birthYeah;
    }
    // 인수 birthYeah가 없는데???

    const y = [1990, 1967, 2002, 2010, 2018];
    const ages1 = calcAge(y[0]); // 왜 y값을 빼는건지?
    const ages2 = calcAge(y[1]);
    const ages3 = calcAge(y[y. length - 1]);
    console.log(ages1, ages2, ages3);

    const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y. length - 1])];
    console.log(ages);


    // 요소 추가 
    const newFriends = ['Michael', 'Steven', 'Peter'] ;
    newFriends.push('Tom'); // 순차적으로 추가됨 (제일 마지막)
    newFriends.unshift('Jonas'); // 제일 앞에 추가됨

    console.log(newFriends);

    // 요소 삭제
    newFriends.pop(); // 순차적으로 삭제됨 (제일 마지막)
    newFriends.pop();
    const popped = newFriends.pop(); // 마지막 삭제된 요소를 호출해 줌
    newFriends.shift(); // 제일 앞 요소를 삭제
    console.log(newFriends);
    // console.log(popped);

const fruits = ['사과', '배', '딸기','파인애플'];
const fruitsLength = fruits.push ('단감');
console.log(fruits);
console.log(fruitsLength); // 총 카운트를 반환

console.log(fruits.indexOf('딸기')); // 딸기 요소의 위치를 반환
console.log(fruits.indexOf('호빵')); // 호빵 요소의 위치를 반환. 요소가 없는 경우 -1을 반환
    fruits.push(23);
    console.log(fruits);

console.log(fruits.includes('딸기')); // 참 또는 거짓을 반환
console.log(fruits.includes('호빵'));
console.log(fruits.includes(23));