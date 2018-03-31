// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Attempt #1
// function chunk(array, size) {
//   let outer = [];
//   let inner = [];
//   let counter = 0;

//   for (let i = 0; i < array.length; i++) {
//     inner.push(array[i]);
//     counter++;
//     if (counter === size || i === array.length - 1) {
//       outer.push(inner);
//       counter = 0;
//       inner = [];
//     }
//   }
//   return outer;
// }

// Attempt #2
// function chunk(array, size) {
//   let outer = [];
//   for (let element of array) {
//     let lastInner = outer[outer.length - 1];
//     if (!lastInner || lastInner.length === size) {
//       outer.push([element]);
//     } else {
//       lastInner.push(element);
//     }
//   }
//   return outer;
// }

// Attempt #3
function chunk(array, size) {
  let outer = [];
  let start = 0;
  while (start < array.length) {
    outer.push(array.slice(start, start + size));
    start += size;
  }
  return outer;
}



module.exports = chunk;
