/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  //  感觉，也算是暴力解吧
  //  四个数组不太好做，就两两相乘，存了一个sum -> count 的Map，最后遍历其中一个Map，查看另外一个Map中有没有对应的值，相乘加上count
  //  感觉，和两个的，差不太多。。。算是先做了一个预处理吧，然后暴力解- -。。。

  //  执行用时 :224 ms, 在所有 JavaScript 提交中击败了67.96%的用户
  //  内存消耗 :68.8 MB, 在所有 JavaScript 提交中击败了46.15%的用户

  const AAddB = new Map();
  const CAddD = new Map(); //  Map<number, number>

  const sumAndSet = (array1, array2, map) => {
    for (let num1 of array1) {
      for (let num2 of array2) {
        let sum = num1 + num2;

        let count = map.get(sum) || 0;

        map.set(sum, count + 1);
      }
    }
  };

  sumAndSet(A, B, AAddB);
  sumAndSet(C, D, CAddD);

  let count = 0;

  for (let [key, value] of AAddB) {
    let sumCount = key === 0 ? CAddD.get(0) || 0 : CAddD.get(-key) || 0;

    count += sumCount * value;
  }

  return count;
};

"123".subs;
