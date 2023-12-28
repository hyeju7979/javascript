console.log (`
--- switch--- `);

const day = 'monday';
switch (day) {
    case 'monday':
        console.log ('Plan course structure');
        console.log ('Go to coding meetup');
        break;
    case 'tuesday':
        console.log ('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log ('Write code examples');
        break;
    case 'friday':
        console.log ('Recode videos');
        break;
    case 'satday':
    case 'sunday':
        console.log ('Enjoy the weekend :D');
        break;
    default:
        console.log ('Not a valid day!');
}

if (day === 'monday') {
    console.log ('Plan course structure');
    console.log ('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log ('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    consoloe.log ('Write code examples');
} else if (day === 'friday') {
    console.log ('Recode videos');
} else if (day === 'satday' || day === 'sunday') {
    console.log ('Enjoy the weekend :D');
} else {
    console.log ('Not a valid day!');
}

// switch 문법
// switch 문법
/*
const 변수명 = '입력값';
switch (변수명) {
    case '입력값' :
        console.log ();
        break;
    case '' :
        console.log ();
        break;
}
*/
