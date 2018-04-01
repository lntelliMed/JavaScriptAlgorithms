// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Attempt #1
// function steps(n) {
//   let out = new Array(n);
//   out.fill(' ');

//   for (let i = 0; i < n; i++){
//     for (let j = 0; j <= i; j++) {
//       out[j] = '#';
//     }
//     console.log(out.join(''));
//     out.fill(' ');
//   }
// }

// Attempt #2
function steps(n) {
  let out = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        out += '#';
      } else {
        out += ' ';
      }
    }
    console.log(out);
    out = '';
  }
}


module.exports = steps;
