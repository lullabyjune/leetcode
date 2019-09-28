/**
 * @param {number[]} nums
 */

//  执行用时 :100 ms, 在所有 JavaScript 提交中击败了100%的用户
//  内存消耗 :45.8 MB, 在所有 JavaScript 提交中击败了6.49%的用户

//  emmmm这个。我也没搞懂和dp有啥关系。。。虽然Dp是为了利用缓存来节约算力。。。emmmmm。。。。我就当他有那么点关系吧。。。

var NumArray = function(nums) {
  this.arr = nums;
  this.cache = new Array(nums.length);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (j > this.arr.length) j = this.arr.length - 1;
  if (i < 0) i = 0;

  const getSum = index => {
    if (index < 0) return 0;

    if (typeof this.cache[index] === "undefined") {
      this.cache[index] = getSum(index - 1) + this.arr[index];
    }

    return this.cache[index];
  };

  let sumI = getSum(i);
  let sumJ = getSum(j);

  return sumJ - sumI + this.arr[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
