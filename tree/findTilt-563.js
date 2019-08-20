/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  //  执行用时 :152 ms, 在所有 JavaScript 提交中击败了22.58%的用户
  //  内存消耗 :37.6 MB, 在所有 JavaScript 提交中击败了66.67%的用户

  //  第一版，算是暴力解的吧，在计算节点值的时候存在大量重复计算。

  if (!root) return 0;

  let tilt = 0;

  const calculateSum = root => {
    if (!root) return 0;

    return calculateSum(root.left) + calculateSum(root.right) + root.val;
  };

  const dfs = root => {
    if (!root) return;

    tilt += Math.abs(calculateSum(root.left) - calculateSum(root.right));

    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return tilt;

  //  执行用时 :100 ms, 在所有 JavaScript 提交中击败了80.65%的用户
  //  内存消耗 :37.9 MB, 在所有 JavaScript 提交中击败了33.33%的用户

  //  第二版，后序遍历一次就行了，应该是没有什么重复计算的
  //  但是还是自己写了一个函数来递归，没想到用原函数递归的写法QAQ

  // if (!root) return 0;

  // let tilt = 0;

  // const afterOrder = root => {
  //   if (!root) return 0;

  //   let left = afterOrder(root.left),
  //     right = afterOrder(root.right);

  //   tilt += Math.abs(left - right);

  //   return left + right + root.val;
  // };

  // afterOrder(root);

  // return tilt;
};
