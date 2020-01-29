/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
  const hash = {};

  for (let chip of chips) {
    if (!hash[chip]) hash[chip] = 0;
    hash[chip]++;
  }

  let min = Number.MAX_SAFE_INTEGER,
    keys = Object.keys(hash);

  for (let i = 0, length = keys.length; i < length; i++) {
    let tmpMin = 0;

    for (let j = 0; j < length; j++) {
      if (j === i) continue;

      let diff = Math.abs(keys[j] - keys[i]);

      if (diff % 2 === 1) {
        tmpMin += +hash[keys[j]];
      }
    }

    console.info(tmpMin, i);

    min = Math.min(tmpMin, min);
  }

  return min;
};

console.info(minCostToMoveChips([1, 2, 3]));
