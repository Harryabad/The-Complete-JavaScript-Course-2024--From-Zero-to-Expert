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

/*
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
*/

/*

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`);
    }
};

console.log(jonas.calcAge()); //dont repeat yourself
// console.log(jonas['calcAge'](1991));
// console.log(jonas['calcAge'](jonas.age));
// console.log(jonas['calcAge'](jonas['age']));

// video challenge: get summary
// "Jonas is a 46-year old teacher, and he had a driver's license"

console.log(jonas.getSummary());

*/

// CODING CHALLENGE SEVEN

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = (this.mass) / (this.height * this.height)
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = (this.mass) / (this.height * this.height)
        return this.bmi;
    }
}
john.calcBMI();
mark.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ${mark.bmi}!`);
}
*/

/*
//console.log('Lifting weights repetition 1 😀');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/*
const jonas = [
    'Jonas',
    "Schmedtmann",
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // reading from array
    console.log(jonas[i], typeof jonas[i]);

    // filling array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

console.log('---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

*/
/*
const jonas = [
    'Jonas',
    "Schmedtmann",
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise ${exercise} ---`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}
*/
/*

let rep = 1;
while (rep <= 10) {
    //console.log(`Rep number ${rep}`);
    rep++;
}

// Math.random() return a number between 0 and 1
// Math.trunc rounds to a whole number
let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end...');
    }
}
*/

/// CODING CHALLENGE EIGHt

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + calcTip(bills[i]));
}
console.log(tips);
console.log(totals);

let sum = 0;
const calcAverage = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage(totals))