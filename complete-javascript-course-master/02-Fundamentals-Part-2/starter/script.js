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