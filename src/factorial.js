// Write a JavaScript program to calculate the factorial of a given number.

module.exports = function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let fact = 1;
  for (let n = 1; n <= num; n++) {
    fact *= n;
  }
  return fact;

  /*if (num === 0 || num === 1) { 

    return 1; 

  } else { 

    return num * factorial(num - 1); 

} */
};
