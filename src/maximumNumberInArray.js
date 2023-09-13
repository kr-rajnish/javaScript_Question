// Write a JavaScript program to find the maximum number in an array.
module.exports = function maximumNumberInArray(arr) {
  /* let maxNumber = Number.MIN_VALUE;

  for (let num of arr) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }
  // console.log(maxNumber);
  return maxNumber; */
  return Math.max(...arr);
};
