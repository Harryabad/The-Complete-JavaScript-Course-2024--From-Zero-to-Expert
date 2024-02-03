// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1: Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temperature amplitude : difference between highest and lowest temp
// - How to compute the max and min temperatire :
// - What is a sensore error: And what does it do:

// 2) Breaking up into subproblems
// - How to ignore errors:
// - Find max value in temp array
// - find min value in temp array
// - Subtract min from max (amplitude) and return it:

const calcTemAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  return max - min;
};

const amplitude = calcTemAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2: Function should receive two arrays of temps

// 1) Understanding the problem
// - With 2 Arrays - should we implement funcationality twice : No

// 2) Breaking up into sub-problems
// - How to merge two arrays

const temps1 = [4, 8, -2, -11, "error", 6, 1, 9];
const temps2 = [3, 7, -3, -10, 5, 0, 8];
const calcTemAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  return max - min;
};

const amplitudeNew = calcTemAmplitudeNew(temps1, temps2); // 9 - (-11) = 20
console.log(amplitudeNew);
*/

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celcius",
//     value: 10,
//     /*
//     // C) Fix the bug
//     value: Number(prompt("Degrees celsius")), // bug found, returns a string
//     */
//   };

//   // B) Find the bug
//   // console.log(measurement);
//   console.table(measurement);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) Identify Bug
// console.log(measureKelvin());

// const calcTemAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     debugger;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   return max - min;
// };

// const amplitudeBug = calcTemAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) Identify bug
// console.log(amplitudeBug);

// CODING CHALLENGE #1

/*
Given an array of forcasted maz temps, the thermometer displays a string with these tempetatures.

Example [17,21,23] will print ""... 17oC in 1 days. 21oC in 2 days/ 23oC in 3 days"

Create a function printForecaste which takes in array 'arr' and logs a string like the above

Use the Problems solving framework we have learned, break into sub problems.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// A) Identify
// - each number position in the text needs to be paired with a day
// - each number needs to fit into a string at the right place

const printForecast = function (arr) {
  // °
  let print = ``;
  for (let i = 0; i < arr.length; i++) {
    print += `... ${arr[i]}°C in ${i + 1} days `;
  }
  return print;
};

const forcast = printForecast([17, 21, 23]);
const forcast2 = printForecast([12, 5, -5, 0, 4]);

console.log(forcast);
console.log(forcast2);
