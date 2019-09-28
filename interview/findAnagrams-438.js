/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  //  原本是暴力解的0-0.。。
  //  看题解的滑动窗口。-0-，
  //  牛逼就完事了，反正我是真没想到滑动窗口。。只是隐隐约约感觉应该能用窗口去做，但是没深入去想，而且觉得窗口的话，统计次数和字符串比较那一块会比较蛋疼
  //  看来是我想多了-0-.。

  //  执行用时 :148 ms, 在所有 JavaScript 提交中击败了81.45%的用户
  //  内存消耗 :41.3 MB, 在所有 JavaScript 提交中击败了49.15%的用户

  const windowMap = new Map();
  const matchMap = new Map();
  const results = [];

  let left = 0;
  let right = 0;
  let leftMax = s.length - p.length;
  let windowLength = 0;
  let needMatch = p.length;

  for (let i = 0, length = p.length; i < length; i++) {
    let count = matchMap.get(p[i]) || 0;

    matchMap.set(p[i], count + 1);
  }

  while (left <= leftMax) {
    if (windowLength < needMatch) {
      windowLength++;

      let count = windowMap.get(s[right]) || 0;

      windowMap.set(s[right], count + 1);

      right++;

      continue;
    }

    windowLength--;

    let start = left;
    let isMatch = true;

    left++;

    for (let [key, count] of matchMap) {
      if (windowMap.get(key) !== count) {
        isMatch = false;
        break;
      }
    }

    let windowCount = windowMap.get(s[start]);

    windowMap.set(s[start], windowCount - 1);

    isMatch && results.push(start);
  }

  return results;
};
