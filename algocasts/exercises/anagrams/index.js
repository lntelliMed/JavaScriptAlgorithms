// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Attempt #1
// function anagrams(stringA, stringB) {
//   stringA = stringA.toLowerCase().replace(' ', '').replace('!', '');
//   stringB = stringB.toLowerCase().replace(' ', '').replace('!', '');

//   if (stringA.length !== stringB.length) {
//     return false;
//   }
//   let stringAChars = {};
//   let stringBChars = {};

//   for (let char of stringA) {
//     if (!stringAChars[char]) {
//       stringAChars[char] = 1;
//     } else {
//       stringAChars[char]++;
//     }
//   }

//   for (let char of stringB) {
//     if (!stringBChars[char]) {
//       stringBChars[char] = 1;
//     } else {
//       stringBChars[char]++;
//     }
//   }

//   for (let char in stringAChars) {
//     if (stringAChars[char] !== stringBChars[char]) {
//       return false;
//     }
//   }
//   return true;
// }


// Attempt #2
// function buildCharMap (str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
//  }

// function anagrams(stringA, stringB) {
//   let aCharMap = buildCharMap(stringA);
//   let bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// Attempt #3
function cleanUpString (str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
function anagrams(stringA, stringB) {
  return cleanUpString(stringA) === cleanUpString(stringB);
}

module.exports = anagrams;
