// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Attempt #1
function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

// Attempt #2
// function fib(n) {
//   let first = 0;
//   let second = 1;
//   let next = 1;

//   for (let i = 1; i < n; i++) {
//     next = first + second;
//     first = second;
//     second = next;
//   }
//   return next;
// }

// Attempt #3
// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Attempt #4
// function fib(n, cache = {}) {
//   if (n <= 2) {
//     return 1;
//   }

//   let first;
//   let second;

//   if (cache[n - 1]) {
//     first = cache[n - 1];
//   } else {
//     first = fib(n - 1);
//   }

//   if (cache[n - 2]) {
//     second = cache[n - 2];
//   } else {
//     second = fib(n - 2);
//   }

//   return first + second;
// }

module.exports = fib;
