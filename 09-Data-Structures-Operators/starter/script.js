'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order receiverd: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  oderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// 108.Short Circuiting

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting (returns truthy value - if all falsey the last one)
console.log(3 || 'Harry'); // 3
console.log('' || 'harry'); // harry
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 23; // does not work if 0 as falsey and looks for second result in operation.
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
// works in opposite way to || operator. Returns first falsey operator
console.log(0 && 'Harry');
console.log('7' && 'Harry');

console.log('Hello' && 23 && null && 'Harry');

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/* 107 REST PATTERN 
// Destructuring

// SPREAD, because on righthand side of assignment operator
const arr = [1,2, ...[3,4]];

// REST, because on lefthand side of equals sign
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a,b, others);

// the rest element myst be that last element
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) functions
const add = function(...numbers) {
  console.log(numbers);
  let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum)
};

// REST syntax packs them into an array
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Olives', 'Onions', 'Pepper');
restaurant.orderPizza('Mushrooms');
*/

/*
//////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables are arrays strings, maps, sets. NOT Objects
const str = 'Harry';
const letters = [...str, ' ', 's.'];
console.log(letters);
//console.log(`${...str} is my name`); //ERROR does not expect multiple values separated by a comma

//real world example
//const ingredients = [prompt('Let\'s make pasta! Igredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')]
//restaurant.oderPasta(...ingredients);

//Objects
const newRestaurant = {FoundedIn: 1998, ...restaurant, founder:'Guiseppe'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/* 105. Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del dole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//To destructure Objects we use curly braces
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const{name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Default Values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};

({a,b} = obj);
console.log(a,b);

//nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

/* 103
//Destructuring Arrays
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switch variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a funcion
//console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
