/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  //  分治，牛逼- -
  //  感觉还是8太会分治的那种思想，虽然写出来都是递归0-0，感觉写分治，看缘分。。

  //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了96.55%的用户
  //  内存消耗 :34.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户

  let length = s.length;

  if (length === 0 || length < k) return 0;

  if (k < 2) return length;

  const divide = (left, right) => {
    if (right - left + 1 < k) return 0;

    const charToCountMap = new Map(); //  Map(char, number)

    for (let i = left; i <= right; i++) {
      let count = charToCountMap.get(s[i]) || 0;

      charToCountMap.set(s[i], count + 1);
    }

    while (right - left + 1 >= k && charToCountMap.get(s[left]) < k) {
      left++;
    }

    while (right - left + 1 >= k && charToCountMap.get(s[right]) < k) {
      right--;
    }

    if (right - left + 1 < k) return 0;

    for (let i = left; i <= right; i++) {
      if (charToCountMap.get(s[i]) < k) {
        return Math.max(divide(left, i - 1), divide(i + 1, right));
      }
    }

    return right - left + 1;
  };

  return divide(0, length - 1);

  //  没想到啥太好的办法，算是暴力扫的吧，只不过加了一些map set去剪枝而已= =

  //  执行用时 :220 ms, 在所有 JavaScript 提交中击败了6.90%的用户
  //  内存消耗 :42.6 MB, 在所有 JavaScript 提交中击败了16.67%的用户

  // let length = s.length;
  // let longest = 0;
  // let matchedCharSet = new Set();

  // const isValidate = (map, set) => {
  //   let flag = true;
  //   for (let [key, value] of map) {
  //     if (value < k) {
  //       flag = false;
  //     } else {
  //       set.add(key);
  //     }
  //   }

  //   return flag;
  // };

  // const tryFindSubstring = i => {
  //   let str = "";
  //   let currentLongest = 0;
  //   let startIndex = i;
  //   let matchChar = Array.from(matchedCharSet);

  //   const charToCountMap = new Map(), //  Map<string, number>
  //     deleteSet = new Set(); //  Set<string>

  //   while (i < length) {
  //     if (matchChar.length && !matchChar.includes(s[i])) {
  //       longest = Math.max(currentLongest, longest);

  //       return;
  //     }

  //     str += s[i];

  //     if (charToCountMap.has(s[i])) {
  //       charToCountMap.set(s[i], charToCountMap.get(s[i]) + 1);
  //     } else {
  //       !deleteSet.has(s[i]) && charToCountMap.set(s[i], 1);
  //     }

  //     if (isValidate(charToCountMap, deleteSet)) {
  //       currentLongest = str.length;
  //     }

  //     i++;
  //   }

  //   longest = Math.max(currentLongest, longest);

  //   if (charToCountMap.has(s[startIndex])) {
  //     matchedCharSet = deleteSet;
  //     return;
  //   }

  //   return;
  // };

  // for (let i = 0; i < length; i++) {
  //   (i === 0 || matchedCharSet.has(s[i])) && tryFindSubstring(i);
  // }

  // return longest;
};
