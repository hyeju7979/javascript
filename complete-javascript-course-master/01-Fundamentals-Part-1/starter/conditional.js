console.log (`
--- 조건 연산자 --- `);

const age = 23;
// age >=18 ? console.log ('I like to drink wine 🍷') :
// console.log ('I like to drink ice cream 🍦');

const drink = age >= 18 ? 'I like to drink wine 🍷' : 'I like to drink ice cream 🍦'
console.log (drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'ice cream 🍦';
}
console.log (drink2);
console.log (`I like to drink ${age >= 18 ? 'Champagne 🥂' : 'beer 🍺'}`)

/*
1. if/else  작성
2. 템플릿 리터럴로 작성 console.log (`${}`)
3. 조건부 연산자 >= : 
    console.log (`I like to drink ${age >= 18 ? '막걸리' : '소주'}`)
*/