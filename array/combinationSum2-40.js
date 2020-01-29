/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  const length = candidates.length;

  candidates.sort((a, b) => a - b);

  const getSubResult = (currentIndex, target, currentUse) => {
    if (target === 0) {
      return result.push(currentUse);
    }

    for (let i = currentIndex; i < length; i++) {
      if (candidates[i] === candidates[i - 1]) continue;
      if (candidates[i] <= target) {
        getSubResult(i + 1, target - candidates[i], [
          ...currentUse,
          candidates[i]
        ]);
      }
    }
  };

  getSubResult(0, target, []);

  return result;
};
