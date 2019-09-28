/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  //  看题解的0-0
  //  就是一直在想动态规划，但是感觉这个题一维dp又不太好弄，弄二维的话感觉又有点小题大做。。
  //  题解这个不算dp吧，就是一次遍历，统计totalGas，然后在遍历过程中如果currentGas < 0的话就说明出发点只能是下一个点
  //  最后返回的时候判断total是不是>0，是就返回start，不是就-1
  //  0-0

  //  执行用时 :64 ms, 在所有 JavaScript 提交中击败了99.12%的用户
  //  内存消耗 :34.6 MB, 在所有 JavaScript 提交中击败了56.10%的用户

  let totalGas = 0;
  let currentGas = 0;
  let start = 0;

  for (let i = 0, length = gas.length; i < length; i++) {
    let diff = gas[i] - cost[i];

    totalGas += diff;
    currentGas += diff;

    if (currentGas < 0) {
      start = i + 1;
      currentGas = 0;
    }
  }

  return totalGas >= 0 ? start : -1;

  //  暴力解吧这算是。
  //  感觉可以用动态规划去做。

  //  执行用时 :128 ms, 在所有 JavaScript 提交中击败了37.72%的用户
  //  内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了7.32%的用户

  // gas = gas.map((value, index) => value - cost[index]);

  // let length = gas.length;

  // const canCircuit = index => {
  //   let current = 0;
  //   let distance = 0;

  //   while (distance++ < length) {
  //     current += gas[index++];

  //     if (current < 0) return -1;

  //     if (index >= length) {
  //       index %= length;
  //     }
  //   }

  //   return index;
  // };

  // for (let [index, value] of gas.entries()) {
  //   if (value >= 0 && canCircuit(index) !== -1) return index;
  // }

  // return -1;
};
