// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Attempt #1
// function maxChar(str) {
//   const charCounts = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!charCounts[str[i]]) {
//       charCounts[str[i]] = 1;
//     } else {
//       charCounts[str[i]]++;
//     }
//   }

//   const sortedChars = Object.keys(charCounts).sort((a, b) => charCounts[a] > charCounts[b]);
//   return sortedChars[sortedChars.length - 1];
// }

// Attempt #2
function maxChar(str) {
  const charCounts = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charCounts[char] = charCounts[char] + 1 || 1;
  }

  for (let char in charCounts) {
    if (charCounts[char] >= max) {
      max = charCounts[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
