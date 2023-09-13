import "./styles.css";
const sumOfTwoNumber = require('./sumOfTwoNumber');
const maximumNumberInArray = require('./maximumNumberInArray');
const isPelindrom = require('./isPelindrom');
const reverseString = require('./reverseString');
const returnEvenNumberOfArray = require('./returnEvenNumberOfArray');
const factorial = require('./factorial');
const isPrimeNumber = require('./isPrimeNumber');
const largestElementInNestedArray = require('./largestElementInNestedArray');
const fibonacciSequence = require('./fibonacciSequence');
const capitalizeFirstChar = require('./capitalizeFirstChar');

document.getElementById("app").innerHTML = `
<h1>Practice JavaScript</h1>
`;
// 1. Write a JavaScript function to calculate the sum of two numbers. 
// sumOfTwoNumber(2, 4);

// Write a JavaScript program to find the maximum number in an array. 
// maximumNumberInArray([4,3,6,1,8,3,9,2]);
// console.log(maximumNumberInArray([4,3,6,1,8,3,9,2]));

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
// isPelindrom("adda");
// console.log(isPelindrom("adcda"));

// Write a JavaScript program to reverse a given string. 
// console.log(reverseString("Rajnish"));

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// console.log(returnEvenNumberOfArray([1,2,3,4,5,6,7,8]));

// Write a JavaScript program to calculate the factorial of a given number. 
// console.log(factorial(4));

// Write a JavaScript function to check if a given number is prime.
// console.log(isPrimeNumber(7));

// Write a JavaScript program to find the largest element in a nested array. 
// console.log(largestElementInNestedArray([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]));

// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
// console.log(fibonacciSequence(10));

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
console.log(capitalizeFirstChar("rajnish kumar"));