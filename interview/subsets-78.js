/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  //  依然是回溯- -，只不过没有退出条件，没有添加条件而已，因为求子集嘛，每一次递归都是从n个元素到n+1个元素的集合，每个集合都是子集-0-

  //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了79.76%的用户
  //  内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了48.23%的用户

  let results = [];
  let length = nums.length;

  const getSubsets = (currentArray, totalArray, index) => {
    results.push(currentArray);

    for (let i = index; i < length; i++) {
      getSubsets(currentArray.concat(totalArray[i]), totalArray, i + 1);
    }
  };

  getSubsets([], nums, 0);

  return results;
};

console.info(JSON.stringify(subsets([1, 2, 3])));
