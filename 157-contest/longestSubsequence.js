/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  let currentL = 0,
    maxL = 0;

  for (let i = 0, length = arr.length; i < length; i++) {
    currentL = 0;

    if (arr[i] - arr[i - 1] === difference) currentL = 2;

    let lastIndex = i;

    for (let j = i + 1; j < length; j++) {
      console.info(arr[j], arr[lastIndex], arr[j] - arr[lastIndex]);
      if (arr[j] - arr[lastIndex] === difference) {
        lastIndex = j;
        currentL = currentL === 0 ? 2 : currentL + 1;
      }
    }

    maxL = Math.max(maxL, currentL);
  }

  maxL = Math.max(maxL, currentL);

  return maxL;
};

let arr = [1, 5, 7, 8, 5, 3, 4, 2, 1];
let difference = -2;

// arr = [3, 4, -3, -2, -4];
// difference = -5;

console.info(longestSubsequence(arr, difference));
