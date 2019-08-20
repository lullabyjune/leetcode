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
var sumRootToLeaf = function(root) {
  //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了43.75%的用户
  //  内存消耗 :36 MB, 在所有 JavaScript 提交中击败了100.00%的用户

  let sum = 0;

  const dfs = (root, binaryStr) => {
    if (!root) return;

    if (root && !root.left && !root.right) {
      sum += parseInt(binaryStr + root.val, 2);

      return;
    }

    dfs(root.left, binaryStr + `${root.val}`);
    dfs(root.right, binaryStr + `${root.val}`);
  };

  dfs(root, "");

  return sum;
};
