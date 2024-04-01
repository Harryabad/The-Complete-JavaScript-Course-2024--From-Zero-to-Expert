'use strict';

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
