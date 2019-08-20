/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了94.57%的用户
  //  内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了33.87%的用户

  //  勉强也能算是二分的那种意思吧。感觉-0-

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
};
