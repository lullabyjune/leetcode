/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  let cannot = [],
    max = 0;

  const getPosStr = (i, j) => `${i},${j}`;

  const traceMap = (row, col, cannot, currentSum) => {
    currentSum += grid[row][col];

    cannot.push(getPosStr(row, col));

    if (
      grid[row - 1] &&
      grid[row - 1][col] > 0 &&
      !cannot.includes(getPosStr(row - 1, col))
    ) {
      traceMap(row - 1, col, cannot.slice(), currentSum);
    }

    if (
      grid[row + 1] &&
      grid[row + 1][col] > 0 &&
      !cannot.includes(getPosStr(row + 1, col))
    ) {
      traceMap(row + 1, col, cannot.slice(), currentSum);
    }

    if (grid[row][col + 1] > 0 && !cannot.includes(getPosStr(row, col + 1))) {
      traceMap(row, col + 1, cannot.slice(), currentSum);
    }

    if (grid[row][col - 1] > 0 && !cannot.includes(getPosStr(row, col - 1))) {
      traceMap(row, col - 1, cannot.slice(), currentSum);
    }

    max = Math.max(max, currentSum);
  };

  for (let i = 0, rows = grid.length; i < rows; i++) {
    for (let j = 0, cols = grid[0].length; j < cols; j++) {
      if (grid[i][j] === 0) cannot.push(getPosStr(i, j));
    }
  }

  for (let row = 0, rows = grid.length; row < rows; row++) {
    for (let col = 0, cols = grid[0].length; col < cols; col++) {
      if (grid[row][col] > 0) {
        traceMap(row, col, cannot.slice(), 0);
      }
    }
  }

  return max;
};

let grid = [[0, 6, 0], [5, 8, 7], [0, 9, 0]];

grid = [[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]];

grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [25, 26, 27, 28],
  [29, 30, 31, 32]
];

console.info(getMaximumGold(grid));
