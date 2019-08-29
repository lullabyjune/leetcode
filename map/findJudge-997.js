/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  //  其实我是感觉这个题和图关系不大的。。。虽然说有一丢丢图的知识吧，。。有向图的出度入度。。
  //  但是完全不用构建图啥的。。

  //  执行用时 :160 ms, 在所有 JavaScript 提交中击败了58.97%的用户
  //  内存消耗 :44 MB, 在所有 JavaScript 提交中击败了34.00%的用户

  let outCount = new Array(N).fill(0);
  let inCount = outCount.slice();

  for (let item of trust) {
    if (!item) continue;

    let [self, to] = item;

    outCount[self - 1]++;
    inCount[to - 1]++;
  }

  for (let [index, count] of outCount.entries()) {
    if (count === 0 && inCount[index] === N - 1) {
      return index + 1;
    }
  }

  return -1;
};
