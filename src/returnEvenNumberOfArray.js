// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
module.exports = function returnEvenNumberOfArray(arr) {
  /*const newarr = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      newarr.push(num);
    }
  }
  return newarr;*/

  // OR
  return arr.filter((num) => num % 2 === 0);
};
