// 공식 1
// const 변수(매개변수) {
//     return();
// }


// 공식 2
// const 변수 = function(매개변수) {
//     return();
// }


// 공식 3
// const 변수 = 매개변수 => 


// const dolphins;
// const koalas;

/* 
const calcAverage => scoreDolphins() ? scoreKoalas();

const data1 = dolphins(44 + 23 + 71 / 3);
const date1 = koalas(65 + 54 + 49 /3); 

const data2 = dolphins(85 + 54 + 41 / 3);
const date2 = koalas(23 + 34 + 27 /3);  
*/


// 1. 평균 점수를 내라
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage (3, 4, 5));

// const calcAverage = dolphins(44 + 23 + 71) + koalas(65 + 54 + 49) / 3;
// console.log(calcAverage);


// 2. 양 팀의 평균을 계산
// 테스트 데이터 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);


// 3.
const checkWinner = function(avgDolphins, avgKoalas) {
    // return 30 vs. 13;
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`돌고래가 이겼다. (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`코알라가 이겼다. (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log(`'No team wins...' ${avgDolphins} vs ${avgKoalas}`)
    }
}
checkWinner(scoreDolphins, scoreKoalas);


// 테스트 데이터 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


/* 
const calcTip = function => (125, 555, 44);
const bills = [125, 555, 44];
const tips = [];
const totals = [bills + tip];
if (calcTip => 50 < 300){
    15%;
} else () {
    20;
}
console.log(totals); 
*/

function calTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
}

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcTip1 = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// 화살표 방법
// const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);