// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Attempt #1
// function reverse(str) {
//   if (str === null || str.length === 0) {
//     return str;
//   }
//   let reversedStr = '';
//   // for (let i = str.length - 1; i >= 0 ; i--) {
//   //   reversedStr += str[i];
//   // }
//   for (let char of str) {
//     reversedStr = char + reversedStr;
//   }
//   console.log(str, reversedStr);
//   return reversedStr;
// }

// Attempt #2
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// function reverse(str) {
//   if (str === null || str.length === 0) {
//     return str;
//   }

//   let strChars = str.split('');
//   let start = 0;
//   let end = str.length - 1;
//   while (start < end) {
//     swap(strChars, start, end);
//     start++;
//     end--;
//   }
//   return strChars.join('');
// }

// Attempt #3
// function reverse(str) {
//   if (str === null || str.length === 0) {
//     return str;
//   }
//   return str.split('').reverse().join('');
// }

// Attempt #4
function reverse(str) {
  if (str === null || str.length === 0) {
    return str;
  }
  return str.split('').reduce((rev, char) => char + rev, '');
}


module.exports = reverse;
