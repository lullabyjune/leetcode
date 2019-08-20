/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  //  执行用时 :64 ms, 在所有 JavaScript 提交中击败了99.77%的用户
  //  内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了24.39%的用户

  //  看题解做的，讲道理除了暴力破解和api之外，没想到解法
  //  虽然是在二分的专题，但是没想到这个怎么和二分联系起来0-0.
  //  看了题解之后恍然大悟.jpg，虽然这个不是严格的那种二分模板，但是思路上来说还是有点那种反正分半的意思

  //  拿笔算一遍觉得好牛逼.jpg-0-.反正我是肯定想不到的。。

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let res = 1,
    currentProduct = x;

  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 === 1) {
      res *= currentProduct;
    }

    currentProduct *= currentProduct;
  }

  return res;
};
