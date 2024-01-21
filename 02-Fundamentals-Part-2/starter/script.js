'use strict'
/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 555;
*/

/*
function logger() {
    console.log('My name is lmoses');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const fruitJuice = fruitProcessor(5, 3);
console.log(fruitJuice);
*/

/*
// function declaration
// can be called before theyre defined.  this does not work for expressions
const age1 = calcAge1(1994);
//console.log(age1);

function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1994)
console.log(age1, age2);
*/

/*
// Arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1994, 'Harry'));
console.log(yearsUntilRetirement(1999, 'Billy'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePiecea = cutFruitPieces(apples);
    const orangesPiecea = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePiecea} pieces of apples and ${orangesPiecea} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1994, 'lmoses'));
*/

/*
/// CODING CHALLENGE FIVE

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)

    } else {
        console.log(`No team wins`)
    }
}



checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);

console.log(typeof checkWinner);
console.log(checkWinner());
*/

/*
const friend1 = 'Mchael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
//console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// expressions return a value
// statements perform an action, assign value, call function

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Harry';
const harry = [firstName, 'lmoses', 2037 - 1994, friends];
console.log(harry);

// Exercise
const CalcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = CalcAge(years[0]);
const age2 = CalcAge(years[1]);
const age3 = CalcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [CalcAge(years[0]), CalcAge(years[1]), CalcAge(years[years.length - 1])];
console.log(ages);
*/

/*

const friends = ['Michael', 'Steven', 'Peter'];

// add elements
const newLength = friends.push('Jay'); // add last
console.log(friends);
console.log(newLength);

friends.unshift('John'); //add first
console.log(friends);

//remove elements

friends.pop(); // remove last
const popped = friends.pop(); // returns removed ele
console.log(friends);
console.log(popped);

friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));  // -1

friends.push(23);
console.log(friends.includes('Steven')); // Returns T
console.log(friends.includes('Bob')); // Returns F
console.log(friends.includes('23')); // Returns F

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

/*
/// CODING CHALLENEGE SIX

//from CC4 
const calcTip = function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? Number(bill * .15) : Number(bill * .2);
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills.tips);


const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(totals);
*/

const jonasArray = [
    'Jonas',
    "Schmedtmann",
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey) will not work

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); //truthy value
} else {
    console.log('Wrong request');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@nothanks';

console.log(jonas);

// video challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
