// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Attempt #1
// function pyramid(n) {
//   let mid = Math.floor((2 * n - 1) / 2);
//   let out = ''
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < 2 * n - 1; j++) {
//       if (j <= mid + i && j >= mid - i) {
//         out += '#';
//       } else {
//         out += ' ';
//       }
//     }
//     console.log(out);
//     out = '';
//   }
// }

// Attempt #2
function pyramid(n, row = 0, str = '') {
  let mid = Math.floor((2 * n - 1) / 2);
  if (n === row) {
    return;
  }

  if (str.length === (2 * n - 1)) {
    console.log(str);
    return pyramid(n, row + 1)
  }

  if (str.length <= (2 * n - 1)) {
    if (str.length <= mid + row && str.length >= mid - row) {
      str += '#';
    } else {
      str += ' ';
    }
  }
  pyramid(n, row, str);
}
module.exports = pyramid;
