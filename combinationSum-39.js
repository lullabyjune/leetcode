/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  let length = candidates.length;

  if (length < 1) return result;

  candidates.sort((a, b) => a - b);

  const getResult = (currentTarget, currentIndex, currentResult) => {
    if (currentTarget === 0) {
      return result.push(currentResult);
    }

    for (
      let i = currentIndex;
      i < length && currentTarget - candidates[i] >= 0;
      i++
    ) {
      getResult(currentTarget - candidates[i], i, [
        ...currentResult,
        candidates[i]
      ]);
    }
  };

  getResult(target, 0, []);

  return result;
};
