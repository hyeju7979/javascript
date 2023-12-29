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