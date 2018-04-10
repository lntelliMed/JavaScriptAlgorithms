// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

/*
  1
 2 3
*/

// Attempt #1
// function levelWidth(root) {
//   let queue = [root, null];
//   let counts = [];
//   let counter = 0;
//   while (queue.length) {
//     let node = queue.shift();
//     if (node) {
//       ++counter;
//       queue.push(...node.children);
//     } else {
//       counts.push(counter);
//       counter = 0;
//       if (queue.length) {
//         queue.push(null);
//       }
//     }
//   }
//   return counts;
// }

// Attempt #2
function levelWidth(root) {
  let queue = [root, 'end'];
  let counts = [0];

  while (queue.length > 1) {
    let node = queue.shift();
    if (node === 'end') {
      counts.push(0);
      queue.push('end');
    } else {
      counts[counts.length - 1]++;
      queue.push(...node.children);
    }
  }

  return counts;
}

module.exports = levelWidth;
