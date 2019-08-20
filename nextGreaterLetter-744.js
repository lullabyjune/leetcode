/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了97.00%的用户
  //  内存消耗 :36.2 MB, 在所有 JavaScript 提交中击败了64.71%的用户

  //  标准二分 * 1
  //  努力尝试用第二种模板.jpg-0-

  let left = 0;
  let right = letters.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return letters[left] > target ? letters[left] : letters[0];
};
