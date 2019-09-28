/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} broken
 * @return {number}
 */
var domino = function(n, m, broken) {
  // let map = new Array(n).fill(0),
  let count = 0;

  // map = map.map(el => new Array(m).fill(1));

  // for (let [row, col] of broken) {
  //   map[row][col] = 0;
  // }

  // const clone = arr => JSON.parse(JSON.stringify(arr));

  const solution = (currentCount, currentUsed, row) => {
    count = Math.max(count, currentCount);

    for (; row < n; row++) {
      for (let col = 0; col < m; col++) {
        let point = `${row},${col}`,
          nextRow = `${row + 1},${col}`,
          nextCol = `${row},${col + 1}`;

        if (currentUsed.includes(point)) continue;

        currentUsed.push(point);

        if (row + 1 < n && !currentUsed.includes(nextRow)) {
          let used = currentUsed.slice();

          used.push(nextRow);

          solution(currentCount + 1, used, row);
        }

        if (col + 1 < m && !currentUsed.includes(nextCol)) {
          let used = currentUsed.slice();

          used.push(nextCol);

          solution(currentCount + 1, used, row);
        }
      }
    }
  };

  solution(0, broken, 0);

  return count;
};

console.info(domino(4, 8, []));
