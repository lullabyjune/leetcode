/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  //  执行用时 :132 ms, 在所有 JavaScript 提交中击败了83.33%的用户
  //  内存消耗 :41.7 MB, 在所有 JavaScript 提交中击败了53.33%的用户

  //  看题解做的-0-，刷二分专题，就想着二分了，没想到会先去判断区间啥的
  //  但是如果单独拿出来做的话，我应该也只是会想到用排除法去做区间判断，不会想到加上二分去找区间边界-0-

  let left = 0,
    length = arr.length,
    right = length - k,
    results = [];

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  for (let i = 0; i < k; i++) {
    results.push(arr[left + i]);
  }

  return results;
};
