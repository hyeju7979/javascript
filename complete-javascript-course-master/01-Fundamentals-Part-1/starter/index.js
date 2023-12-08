test
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