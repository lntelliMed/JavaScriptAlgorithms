// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Attemp #1
// function capitalize(str) {
//   let words = str.split(' ');
//   let capitalizedWords = [];
//   for (let word of words) {
//     capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return capitalizedWords.join(' ');
// }

// Attemp #2
// function capitalize(str) {
//   if (str === null || str.length === 0) {
//     return str;
//   }
//   let finalStr = '';

//   let prevChar = ' ';
//   for (let char of str) {
//     if (prevChar === ' ' && char !== ' ') {
//       finalStr += char.toUpperCase();
//     } else {
//       finalStr += char
//     }
//     prevChar = char;

//   }
//   return finalStr;
// }

// Attempt #3
function capitalize(str) {
  if (str === null || str.length === 0) {
    return str;
  }
  let finalStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      finalStr += str[i].toUpperCase();
    } else {
      finalStr += str[i];
    }
  }
  return finalStr;
}
module.exports = capitalize;
