/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  //  动态规划，看题解的- -，一开始压根就没想到动态规划，蛋疼。。
  //  写的很丑，但是将就吧，懒得改了QAQ

  //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了90.84%的用户
  //  内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了82.14%的用户

  let dp = [1, 1];
  let length = s.length;

  if (!length) return 0;

  if (s[0] === "0") return 0;

  for (let i = 1; i < length; i++) {
    if (s[i - 1] !== "0") {
      let compile = s[i - 1] + s[i];

      if (compile >= 1 && compile <= 26) {
        dp[i + 1] = s[i] === "0" ? dp[i - 1] : dp[i - 1] + dp[i];
      } else if (s[i] !== "0") {
        dp[i + 1] = dp[i];
      } else {
        return 0;
      }
    } else if (s[i] !== "0") {
      dp[i + 1] = dp[i - 1];
    } else {
      return 0;
    }
  }

  return dp[length];

  //  依然是回溯？恩，应该是，嘻嘻嘻，真香

  //  就是这个执行时间，，，我有点蒙蔽。。？
  //  执行用时 :8544 ms, 在所有 JavaScript 提交中击败了5.34%的用户
  //  内存消耗 :37.2 MB, 在所有 JavaScript 提交中击败了7.14%的用户

  // let resultCount = 0;
  // let sLength = s.length;

  // const backTrack = (s, currentIndex) => {
  //   if (currentIndex >= sLength) {
  //     return resultCount++;
  //   }

  //   if (s[currentIndex] === "0") return;

  //   backTrack(s, currentIndex + 1);

  //   if (
  //     currentIndex + 2 <= sLength &&
  //     +s.slice(currentIndex, currentIndex + 2) <= 26
  //   ) {
  //     backTrack(s, currentIndex + 2);
  //   }
  // };

  // backTrack(s, 0);

  // return resultCount;
};

console.info(numDecodings("123456"));
