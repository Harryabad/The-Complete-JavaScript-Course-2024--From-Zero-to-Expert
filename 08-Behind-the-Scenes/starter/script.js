'use strict';

/*
function calAge(birthYear) {
  const age = 2037 - birthYear;
  //console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`; // firstName in different scope, can only look up, not down
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var mellenial = true;
      // creating new variable with same name as outer scopes
      const firstName = 'Steven';

      // reassigning out scope's variable
      output = 'NEW OUTPUT'; // updates defined variable, will effect scope

      const str = `oh, and you're a millenial, ${firstName}`;
      //variable already in scope so will look no further for firstName
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // const output = 'NEW OUTPUT'; // different variable, will not effect variable from outer scope
    }
    // console.log(str); blocked scoped - const and let variables.  var is function scoped so would work
    console.log(mellenial);
    console.log(output);
    // add(2,3); does not work, functions are blocked scoped. However if we turned off 'use strict'; it will work
  }
  printAge();

  return age;
}

const firstName = 'Harry';
calAge(1994);
// console.log(age); not in scope cannot access
// nor can we call printAge(); here
*/

/*
console.log(me); // undefined (hoisted to undefined)
console.log(job); // temrporal dead zone
console.log(year); // temporal dead zone
*/

var me = 'Harry';
let job = 'Teacher';
const year = 1994;

/*
// Functions
console.log(addDecl(2, 3)); // works
console.log(addExpr(2, 3)); // temporal dead zone as defined with const
console.log(addArrow(2, 3)); // temporal dead zone as defined with const
console.log(addArrow2(2, 3)); // hoisted to undefined and throws not a function error

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addArrow2 = (a, b) => a + b;
*/
// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
  // still prints even though numProducts is 10.  Because it not 10 but undefined.
}

var x = 1; // appears in window

let y = 2;
const z = 3;
// let and const do not appear in the windows object property

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
