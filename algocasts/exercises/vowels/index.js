// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Attempt #1
// function vowels(str) {
//   let vowels = ['a', 'i', 'e', 'o', 'u'];
//   let counter = 0;
//   str = str.toLowerCase();

//   for (char of str) {
//     if (vowels.indexOf(char) !== -1) {
//       ++counter;
//     }
//   }

//   return counter;
// }

// Attempt #2
// function vowels(str) {
//   let counter = 0;

//   for (char of str) {
//     if (/[aeiouAEIOU]/.test(char)) {
//       ++counter;
//     }
//   }
//   return counter;
// }

// Attempt #3
// function vowels(str) {
//   let counter = 0;
//   // let vowelChars = 'aeiou';
//   let vowelChars = ['a', 'e', 'i', 'o', 'u'];

//   for (char of str.toLowerCase()) {
//     if (vowelChars.includes(char)) {
//       ++counter;
//     }
//   }
//   return counter;
// }

// Attempt #3
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
