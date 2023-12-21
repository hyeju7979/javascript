const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should gat a job!");
}

let height;
if (height) {
    console.log ("YAY! height is definde");åß
} else {
    console.log ("Height is undefined");
}

// const age = 18;
// if (age === 18) console.log ('You just became an adult :D (strict)');
// if (age == 18) console.log ('You just became an adult :) (loose)');

const age = '18';
if (age === 18) console.log ('You just became an adult :D (strict)');
if (age == 18) console.log ('You just became an adult :) (loose)');

/* 
깨끗한 코드의 일반적인 규칙 : 
가능한 한 느슨한 동등한 운영자를 피하세요.
값을 비교할 때는 항상 등호 3개와 동일한 등호를 사용하세요. 
*/

const favourite = Number (prompt("What's your favourite number?"));
console.log (favourite);
console.log (typeof favourite);

// if (favourite == 23) {
//     console.log ("Cool! 23 is an amszing number!")
// }
if (favourite === 23) {
    console.log ("Cool! 23 is an amszing number!")
} 
    else if (favourite === 7) {
        console.log ("7 is also a cool number");
    }
    else if (favourite === 9) {
        console.log ("9 is also a cool number");
    }
else {
    console.log ("Number is not 23 or 7");
}

if (favourite !== 23) {
    console.log ("Why not 23?")
}
if (favourite != 23) {
    console.log ("Why not 23?")
}

/* 
1. !A (false) : true
2. A AND B (false) (true) :  flase
3. A OR B (false) (true) : true
4. !A AND B (true) (true) :  false
5. A OR !B (false) (false) :  true
*/