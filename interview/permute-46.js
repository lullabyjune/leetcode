/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  //  就暴力回溯呗-0-，而且说了不存在重复元素，我都不用去做一个set判断重复遍历的情况-w-
  //  不想写for，写了for of，一开始没写entries()，一直给我报错- -，mmp，而且第一个居然是index,感觉是当hash去遍历的  key value-  -。

  //  执行用时 :100 ms, 在所有 JavaScript 提交中击败了79.97%的用户
  //  内存消耗 :37.3 MB, 在所有 JavaScript 提交中击败了26.98%的用户

  let result = [];

  const arrange = (currentArray, leftArray) => {
    if (!leftArray.length) {
      return result.push(currentArray);
    }

    for (let [index, item] of leftArray.entries()) {
      let copyArray = leftArray.slice();
      copyArray.splice(index, 1);

      arrange(currentArray.concat(item), copyArray);
    }
  };

  arrange([], nums);

  return result;
};

console.info(permute([1, 2, 3]));
