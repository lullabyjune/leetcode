/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  //  emmmm，线性复杂度，常量额外空间，只能想到这样的办法了。
  //  因为反正数列是一定的，而且只少一个，只需要分别求和算差多少就行了QAQ

  //  执行用时 :76 ms, 在所有 JavaScript 提交中击败了95.47%的用户
  //  内存消耗 :36 MB, 在所有 JavaScript 提交中击败了74.21%的用户

  const getSum = max => {
    let i = 0;
    let sum = 0;

    while (i <= max) {
      sum += i++;
    }

    return sum;
  };

  let shouldHave = nums.length;
  let shouldBeSum = getSum(shouldHave);

  let currentSum = nums.reduce((sum, currentSum) => {
    return sum + currentSum;
  }, 0);

  return shouldBeSum - currentSum;
};
