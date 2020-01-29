/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0] ? matrix[0].length : 0;
  let row = 0;

  if (cols === 0) return false;

  for (; row < rows; row++) {
    if (matrix[row][0] > target) break;
  }

  if (row === 0) {
    return false;
  }

  row -= 1;

  for (let col = 0; col < cols; col++) {
    if (matrix[row][col] === target) {
      return true;
    }
  }

  return false;
};
