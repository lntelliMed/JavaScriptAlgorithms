// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Attemp #1
// function reverse(str) {
//   if (str === null || str.length === 0) {
//     return str;
//   }
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function palindrome(str) {
//   if (str === null || str.length === 0) {
//     return true;
//   }
//   if (str === reverse(str)) {
//     return true;
//   }
//   return false;
// }

// Attempt #2
// function palindrome(str) {
//   if (str === null || str.length === 0) {
//     return true;
//   }

//   return str === str.split('').reverse().join('');
// }

// Attempt #4
// function palindrome(str) {
//   if (str === null || str.length === 0) {
//     return true;
//   }

//   return str.split('').every((char, i) => char === str[str.length - 1 - i]);
// }

// Attempt #3
function palindrome(str) {
  if (str === null || str.length === 0) {
    return true;
  }

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = palindrome;
