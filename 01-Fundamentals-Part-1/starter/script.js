
/*
/// Values and Varieables

let js = 'amazing';
//if (js === 'amazing') alert('JS is fun!!!');

console.log(40 + 8 + 23 - 10);

console.log('Harry');
console.log(23);

let firstName = 'Harry';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let harry_abad = "HA";
let $function = 27;

let person = "harry";
let PI = 3.1415;

let myFirstJob = "Homebase"
let myCurrentJob = "Tech Support"

let job1 = "Homebase";
let job2 = "Tech Support";

console.log(myFirstJob);

//Practice Assignment 1
let myCountry = "England";
let myContinent = "Europe";
let populationOfMyCountry = 70000000;
console.log(myCountry);
console.log(myContinent);
console.log(populationOfMyCountry);


/// Datatypes

let javascriptIsFun = true;
//console.log(true);
//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Harry");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(year)
console.log(typeof year);

console.log(typeof null);

//Practice Assignment 2
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof populationOfMyCountry);
console.log(typeof myCountry);
console.log(typeof language);


/// Let, Const and Var

let age = 30;
age = 31;


const birthYear = 1991;
//birthYear = 1990; cannot update a const

//const job; const have to be defined
var job = 'programmer';
job = 'teacher';

lastName = 'Harry'; //bad practice
console.log(lastName);

//Practice Assignment 3
language = 'English';
const myCountry = 'England';
const myContinent = 'Europe';
const isIsland = false;
isIsland = true;



///Basic Operators
// math operators
const now = 2023;
const ageHarry = now - 1994;
const ageSarah = now - 1999
console.log(ageHarry, ageSarah);

console.log(ageHarry * 2, ageHarry / 10, 2 ** 3);

const firstName = 'Harry';
const lastName = 'Abad';

console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
console.log(11 / 5, 11 % 5, Math.floor(11 / 5));
x += 10;
x *= 4
x++;
x--;
x--;
console.log(x);

// comparison operators

console.log(ageHarry > ageSarah); // true

console.log(ageSarah >= 18);

const isfullAge = ageSarah >= 18;

console.log(now - 1994 > now - 2023);

//Practice Assignment 4
let countryPopulation = 70000000;
let split = countryPopulation / 2;
countryPopulation++;
console.log(countryPopulation);
let finland = 6000000;
console.log(countryPopulation > finland);
let avgCountry = 33000000;
console.log(countryPopulation > avgCountry);
let myCountry = 'England'
let myContinent = 'Europe'
let language = 'English'
let desription = myCountry + ' is in ' + myContinent + ', and its ' + countryPopulation + ' people speak ' + language;
console.log(desription);

*/
/*
/// Operator Precedence

const now = 2023;
const ageHarry = now - 1994;
const ageSarah = now - 1999

console.log(now - 1994 > now - 2023);
//MDN Operator Precedence

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageHarry + ageSarah) / 2;
console.log(ageHarry, ageSarah, averageAge);

///CODING CHALLENGE ONE

/* Write your code below. Good luck! 🙂 */

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI)

*/

/*
//STRING TEMPLATE AND LITERALS

const firstName = 'Harry';
const job = 'technician';
const birthYear = 1994;
const currentYear = 2037;

const harry = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!";
console.log(harry);

const harryNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(harryNew);

console.log(`Just a regular String...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
Multiple
Lines`);
*/

/*
let centuay;
const age = 15;
//const isOldEnough = age >= 18;

if (age >= 19) {
    console.log(`Sarah can start driving license 🍕`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`);
};

const birthYear = 1994;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// CODING CHALLENGE #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

 Write your code below. Good luck! 🙂

if(BMIMark > BMIJohn){
    console.log(`Marks's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
};
*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Harry'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');

console.log('23' - '10' - 3); //ans = 3
console.log('23' + '10' + 3); // 23103
// * and / convert strings to numbers

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);

// > 2+3+4+'5'   = "95" //does math first

*/

/*
// 5 Falsy values: 0, '', underfiened, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Harry'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/
/*
const age = 18;

if (age === 18) console.log('You just became and adult'); //strict
if (18 == '18') console.log('JS type converts so true'); //loose

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log(' 7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');
*/

/*
const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('some else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

/*
/// CODING CHALLENGE THREE
// Write your code below. Good luck! 🙂 

// const scoreDolphins = Number((96 + 108 + 89) / 3);
// const scoreKoalas = Number((88 + 91 + 110) / 3);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else {
//     console.log('Both win the trophy');
// }

// Bonus 1&2
const scoreDolphins = Number((97 + 112 + 81) / 3);
const scoreKoalas = Number((109 + 95 + 86) / 3);
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy');
}
*/

/*
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare for work');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record video');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy end of week');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('do stuff');
} else if (day === 'tuesday') {
    console.log('more stuff');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('mid week stuff');
} else if (day === 'friday') {
    console.log('almost');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('You made it');
} else {
    console.log('Not a valid day');
}
*/

/*
// ? is conditional operator (ternary)
const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age > - 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

/// CODING CHALLENGE FOUR

const bill = Number(275);

const tip = bill >= 50 && bill <= 300 ? Number(bill * .15) : Number(bill * .2);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);