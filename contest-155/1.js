/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  let min = Number.MAX_SAFE_INTEGER,
    results = [];

  arr.sort((a, b) => a - b);

  for (let i = 0, length = arr.length; i < length - 1; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1]);
    let tmp =
      arr[i] <= arr[i + 1] ? [arr[i], arr[i + 1]] : [arr[i + 1], arr[i]];

    if (diff < min) {
      results = [tmp];
      min = diff;
    } else if (diff === min) {
      results.push(tmp);
    }
  }

  return results;
};
