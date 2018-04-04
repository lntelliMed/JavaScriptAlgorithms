// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  let outerArr = [];
  let counter = 1;

  for (let i = 0; i < n; i++) {
    outerArr.push([]);
  }

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      outerArr[rowStart][i] = counter++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      outerArr[i][colEnd] = counter++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      outerArr[rowEnd][i] = counter++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      outerArr[i][colStart] = counter++;
    }
    colStart++
  }

  return outerArr;
}

module.exports = matrix;
