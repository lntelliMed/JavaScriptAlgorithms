// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Attempt #1
// function reverseInt(n) {
//   if (n === 0) return n;
//   let sign = Math.sign(n);
//   n = sign * n;
//   let reversedNumber = parseInt(n.toString().split('').reverse().join(''));
//   return sign * reversedNumber;
// }

// Attempt #2
function reverseInt(n) {
  if (n === 0) return n;
  let sign = Math.sign(n);
  n = sign * n;
  let reversedNumber = 0;
  while (n > 0) {
    let rightDigit = n % 10;
    reversedNumber = (reversedNumber * 10) +rightDigit;
    n = Math.floor(n / 10);
  }
  return sign * reversedNumber;
}

module.exports = reverseInt;
