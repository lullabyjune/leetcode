/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  //  执行用时 :56 ms, 在所有 JavaScript 提交中击败了100.00%的用户
  //  内存消耗 :35.4 MB, 在所有 JavaScript 提交中击败了52.54%的用户

  //  依稀记得这个题，或者这个类似的题，我去年做过。。。想了可能几个小时吧。不会
  //  现在居然几分钟就做出来了。嘿嘿。开心

  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;
  const map = new Array(rows);

  if (obstacleGrid[0][0] === 1) return 0;

  for (let row = 0; row < rows; row++) {
    map[row] = new Array(cols).fill(0);
  }

  map[0][0] = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) continue;

      if (obstacleGrid[row][col] === 1) continue;

      if (row - 1 < 0) {
        map[row][col] = 0 + (map[row][col - 1] || 0);

        continue;
      }

      map[row][col] = map[row - 1][col] + (map[row][col - 1] || 0);
    }
  }

  return map[rows - 1][cols - 1];
};
