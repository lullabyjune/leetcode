/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  //  执行用时 :68 ms, 在所有 JavaScript 提交中击败了97.31%的用户
  //  内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了65.15%的用户

  const rows = grid.length;
  const cols = grid[0].length;
  const sumMap = new Array(rows);

  for (let row = 0; row < rows; row++) {
    sumMap[row] = new Array(cols).fill(0);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row - 1 < 0) {
        sumMap[row][col] = (sumMap[row][col - 1] || 0) + grid[row][col];

        continue;
      }

      if (col - 1 < 0) {
        sumMap[row][col] = sumMap[row - 1][col] + grid[row][col];

        continue;
      }

      sumMap[row][col] = Math.min(
        sumMap[row - 1][col] + grid[row][col],
        sumMap[row][col - 1] + grid[row][col]
      );
    }
  }

  return sumMap[rows - 1][cols - 1];
};
