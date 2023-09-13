// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

module.exports = function isPelindrom(str) {
  /*let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true; */

  // OR by using methods
  return str === str.split("").reverse().join("");
};
