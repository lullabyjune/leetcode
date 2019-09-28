/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} broken
 * @return {number}
 */
var domino = function(n, m, broken) {
  let map = new Array(n).fill(0),
    count = 0;

  map = map.map(el => new Array(m).fill(1));

  for (let [row, col] of broken) {
    map[row][col] = 0;
  }

  const clone = arr => JSON.parse(JSON.stringify(arr));

  const solution = (currentMap, currentCount, row, col) => {
    count = Math.max(count, currentCount);
    let resetCol = false;

    for (; row < n; row++) {
      resetCol && (col = 0);
      for (; col < m; col++) {
        if (currentMap[row][col] === 0 || currentMap[row][col] === 2) continue;

        let flag = false;

        if (row + 1 < n && currentMap[row + 1][col] === 1) {
          let cloneMap = clone(currentMap);

          cloneMap[row][col] = 2;
          cloneMap[row + 1][col] = 2;

          flag = true;

          solution(cloneMap, currentCount + 1, row, col);
        }

        if (col + 1 < m && currentMap[row][col + 1] === 1) {
          let cloneMap = clone(currentMap);

          cloneMap[row][col] = 2;
          cloneMap[row][col + 1] = 2;

          flag = true;

          solution(cloneMap, currentCount + 1, row, col);
        }

        if (flag) return;
      }
      resetCol = true;
    }
  };

  solution(map, 0, 0, 0);

  return count;
};

console.info(domino(8, 8, []));
