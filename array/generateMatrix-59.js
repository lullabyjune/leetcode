/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  //  话说突然想起来这种矩阵的题,其实我好像一直都不太会做- -...
  //  追根溯源想到高中立体几何也很捞比...嘛....
  //  蛋疼...
  if (n === 1) return [[1]];

  let matrix = [];
  let currentValue = 1;
  let row = (col = top = left = 0);
  let bottom = (right = n - 1);
  let max = n ** 2;

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }

  while (currentValue <= max) {
    if (row === top && col < right) {
      while (col < right) {
        matrix[row][col++] = currentValue++;

        if (col === right - 1) {
          top++;
        }
      }
    } else if (col === right && row < bottom) {
      while (row < bottom) {
        matrix[row++][col] = currentValue++;

        if (row === bottom - 1) {
          right--;
        }
      }
    } else if (row === bottom && col > left) {
      while (col > left) {
        matrix[row][col--] = currentValue++;

        if (col === left + 1) {
          bottom--;
        }
      }
    } else if (col === left && row > top) {
      while (row > top) {
        matrix[row--][col] = currentValue++;

        if (row === top + 1) {
          left++;
        }
      }
    }
  }

  return matrix;
};
