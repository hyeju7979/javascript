// alert('반가워요!');

// 값을 로그로 출력하기
const a = 10;
const b = 20;
console.log(a + b);
const sum = a + b;
console.log(sum);

console.log('안녕하세요', '지금은', new Date(), '입니다.') 

// 계산 프로그램 만들기
console.log(100 + 200);
console.log(200 - 80);
console.log(100 * 3);
console.log(400 / 5);
console.log(402 % 5);
console.log(2 ** 3);

console.log (100 + 200, 200 - 80, 100 * 3, 400 / 5, 402 % 5, 2 ** 3);


// 변수 선언하기
let myName = '제이펍';
console.log(myName);
// alert(myName);


let currentDate = new Date();
console.log(currentDate);


let myFunction = ( ) => console.log('함수확인');
myFunction();


/* 
let myName = '퓅귄';
let myName = '고래';
console.log(myName);
*/


let number1 = 10;
let number2 = 20;
let sum2 = number1 + number2;
console.log(sum2);


let firstName = '브렌던';
let familyName = '아이크';
let fullName = firstName + familyName;
console.log(fullName);


let value1 = 100;
    value2 = value1;
console.log(value2);


// 상수 사용하기
const myName3 = '사자';
console.log (myName3);

const myString = '사자';
const myFunction2 = () => console.log('함수확인');

let myName4 = '자바';
myName4 = '스크립트';
console.log(myName4);


const myArray = ['팽귄' , '고래' , '참치'];
myArray[0] = '새우'
console.log(myArray);


const myObject = {
    id : 20,
    name : '팽귄'
};
myObject.name = '오리';
console.log(myObject);


const car1 = '삼성';
const car2 = '현대';
const car3 = '기아';

console.log(car1);
console.log(car2);
console.log(car3);


const cars = ['삼성:2000','현대:3000','기아:4000'];
//const price = ['2000', '3000', '4000'];

const newcarObj1 = {
    brand : '삼성',
    price : 2000
}
const newcarObj2 = {
    brand : '현대',
    price : 3000
}
const newcarObj3 = {
    brand : '기아',
    price : 4000
}

const newCars = [newcarObj1,newcarObj2,newcarObj3];


newCars.forEach(function(car){
    if(car.price >= 3000) {
        console.log(car.brand);
        
    }else {
        console.log(car.price);
    }
})


/* 
for(int i = 0 ; i < cars.length; i++) {
    console.log(cars[i]);
    console.log(price[i]);
} 
 */
cars.forEach(function(car){
    console.log(car);
})


const value = 100;
const txt = 1.1;
const price = value * txt;
const result = 100 + 200 + 400;
console.log(result);
console.log(price);


console.log('사과' == '사과')
console.log(10 < 30);
console.log(20 >= 30);

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 == array2);


const array3 = [1, 2, 3];
const array4 = array3;
console.log(array3 == array4);

console.log(10 == '10');
console.log(10 === '10');

console.log(20 != '20');
console.log(20 !== '20');

let a2 = 10;
let b2 = 20;
a2 += b2;
console.log(a2);

let c = '자바';
let d = '스크립트'
c += d;
console.log(c);

let e = 5;
let f = 2;
e *= f;
console.log(e);


function myFunction3(a) {
    const result = a + 2;
    return result;
}
myFunction3();

function logger(){
    console.log('My name is Jonas')
}
logger();


function calcSum(a, b, c) {
    const result = a + b + c;
    return result;
}

function myFunction4() {
    console.log('안녕하세요');
    return 100;
}
myFunction4 ();

function myFunction5(a, b) {
    if (a >= 100) {
        return a;
    }
    return b;
}
const myResult5 = myFunction5(20, 50);
console.log(myResult5);



function calcFunction(price, tax) {
    const result = price * tax;
    return result;
}
const myResult = calcFunction(100, 0.1);
console.log(myResult);



// 파라미터가 없거나 2개 이상인 경우는 반드시 ( ) 사용
const calcSum2 = (a, b, c) => {
    const result = a + b + c;
    return result;
}
const myResult2 = calcSum2(1, 2, 3);
console.log(myResult2);

/* 
const myFunction6 = (a) => {
    return a + 2;
}  
 */

// 파리미터가 하나인 경우 ( ) 생략 가능
const myFunction6 = a => {
    return a + 2;
}
const myResult6 = myFunction6(10);
console.log(myResult6);

// 파라미터의 ()를 사용한 경우
/* 
const myFunction7 = (a, b, c, d) => a + b + c + d + 5;
const myResult7 = myFunction7(1, 2, 3, 4);
console.log(myResult7);
 */

// 파라미터의 ()를 사용하지 않은 경우
const myFunction7 = a => a + 5;
const myResult7 = myFunction7(1);
console.log(myResult7);


// 함수의 파라미터 초기값 설정
function calcFunction2(price, tax = 0.08) {
    const result = price + price * tax;
    return result;
}
const calcResult1 = calcFunction2(100);
console.log(calcResult1);

const calcResult2 = calcFunction2(100, 0.1);
console.log(calcResult2);

/* 
function calcSum3 (...prices) {
    let result = 0;
    for (coust value of prices) {
        result += value;
    }
    return result;
}
const calcResult3 = calcSum3(10, 20);
console.log(calcResult3);

const calcResult4 = calcSum3(5, 10, 15);
console.log(calcResult4); 
*/


/* 
const myPrice = 100;
if (myPrice >= 50) {
    alert('myPrice는 50 이상입니다.');
} else if (myPrice >= 10) {
    alert('myPrice는 10이상 50미만 입니다.');
} else {
    alert('myPrice는 10미만 입니다.');
}
 */

/* 
if (true) {
    alert('Hello');
} */


/* 
const randomNum = Math.random() * 10;

if (randomNum은 >= 5 ) {
    alert('randomNum은 5이상');
} else {
    alert('randomNum은 5미만');
}
 */

/*
const myFruit = '사과';
switch (myFruit)  {
    case '사과' : 
    alert('사과입니다.');
    break;

    case '귤' : 
    alert('귤입니다.');
    break;

    default:
    alert('기타 과일입니다.');
    break;
}
*/
/* 
const myFruit2 = '수박';
switch (myFruit2)  {
    case '사과' : 
    case '귤' : 
    alert('사과 혹은 귤입니다.');
    break;

    default:
    alert('기타 과일입니다.');
    break;
} 
*/

const myValue = '100';
switch(myValue) {
    case 100:
    console.log('숫자타입의 100입니다.');
    break;

    default:
    console.log('문자열의 100입니다.');     
    break;
}