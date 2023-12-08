// let js = "amazing";
// if (js === "amazing") alert("JavaScript is Fun!");

// 48 + 8 + 23 - 10;
console.log(48 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// let firstName = "Jonas";
// // if (firstName = "Zonas") alert("Hello!")
// console.log("firstName");
// console.log(firstName);

let secondName = "bob";
console.log(secondName);

let third = "jonas3"
let thirdName = "bob3"
let thirdNamePerson = "matilda3"

console.log(third);
console.log(thirdName);
console.log(thirdNamePerson);

// let 3years = 3;
// let jonas& mitilda = "JM";

let jonas_matilda = "JM"
let $function = 27;

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
console.log(job2);


// let age = 23;
// console.log(age);

let yourName = "jonas";
console.log(yourName);

let fullAge = true;

let children;

true;
console.log(true);

let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);


console.log(typeof true);
// console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(year);

console.log(null);
console.log(typeof null);


let age = 30;
age = 31;
console.log(age);

let year;
year = 2024;
console.log(year);

const myBirthYear = 1979;
// myBirthYear = 2000;
console.log(myBirthYear);

// const job;

var job4 = 'programmer';
job4 = 'teacher';
console.log(job4);


////////////////////////////////////
// Basic Operators
// 수학 연산자.  Math operators
const ageI = 2024 - 1979;
console.log(ageI);


// const ageJonas = 2024 - 1991;
// const ageSarah = 2024 - 2018;
// console.log(ageJonas, ageSarah);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName = 'jonas';
const lastName = 'Schmetmann';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// console.log(x);


// 할당 연산자.  Assignment operators
/* let x = 10 + 5; //15
x += 10; // 15 + 10 = 25
x *= 4; // 25 * 4 = 100
x++;
x--;
console.log(x); */


//비교 연산자. Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);
console.log(ageJonas, ageSarah, averageAge);


/*
// challenge


let Mark;
let John;

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark);ss
console.log(BMIJohn);

let markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

const firstName = 'Jonas';
const job = 'designer';
const myBirthDay = 1979;
const year = 2023;

const jonas = "I'm " + firstName + ", a " + (year - myBirthDay) + "years old " + job + "!";

console.log(jonas);

// 백스틱
const jonasNew = `I'm ${firstName}, a ${year - myBirthDay}years old ${job}!`;
console.log(jonasNew);

// 다중 라인 문자열
console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\
Facilis placeat praesentium omnis eaque! \n\
Ad, reprehenderit! Nihil tempore culpa libero ratione molestiae.");


console.log(`
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Facilis placeat praesentium omnis eaque!
Ad, reprehenderit! Nihil tempore culpa libero ratione molestiae.`)