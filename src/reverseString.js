// Write a JavaScript program to reverse a given string.

module.exports = function reverseString(str) {
  return str.split("").reverse().join("");

  // OR withought function
  /*let reversed = "";
  for (let ch of str) {
    reversed = ch + reversed;
  }
  return reversed;*/
};
