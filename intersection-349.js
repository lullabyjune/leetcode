/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了97.04%的用户
  //  内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了36.06%的用户%

  //  这题居然是在二分的专题，但是说实话感觉非要用二分的话- -，除非是有序的，
  //  强行排序一波用二分的话，反而感觉有点得不偿失了
  //  除非说这个数据量特别大，这样的话先排序倒是有点用感觉

  let num1Unique = new Set(nums1);
  let num2Unique = new Set(nums2);
  let results = [];

  for (let num of num1Unique) {
    if (num2Unique.has(num)) {
      results.push(num);
    }
  }

  return results;
};
