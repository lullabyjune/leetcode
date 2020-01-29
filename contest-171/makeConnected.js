/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  let currentSet = new Set();
  let first = connections.shift();

  connections.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

  let dividedCount = 0;
  let canMove = 0;

  currentSet.add(first[0]);
  currentSet.add(first[1]);

  for (let [a, b] of connections) {
    let hasA = currentSet.has(a);
    let hasB = currentSet.has(b);

    if (hasA && hasB) {
      canMove++;
      continue;
    }

    currentSet.add(a);
    currentSet.add(b);

    continue;
  }

  dividedCount = n - currentSet.size;

  let diff = canMove - dividedCount;

  return diff < 0 ? -1 : canMove - diff;
};
