/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  //  虽然丑了点。但是毕竟题目就这么简单- - ，我也懒得去抽.jpg

  //  执行用时 :88 ms, 在所有 JavaScript 提交中击败了81.82%的用户
  //  内存消耗 :37.2 MB, 在所有 JavaScript 提交中击败了67.95%的用户

  let result = ["1"];

  for (let i = 2; i <= n; i++) {
    let diff3 = i % 3;
    let diff5 = i % 5;

    if (!diff3 && !diff5) {
      result.push("FizzBuzz");

      continue;
    }

    if (!diff3) {
      result.push("Fizz");
      continue;
    }

    if (!diff5) {
      result.push("Buzz");
      continue;
    }

    result.push(`${i}`);
  }

  return result;
};
