/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  //  递归真是。。又简单又难- -

  //  执行用时 :108 ms, 在所有 JavaScript 提交中击败了88.39%的用户
  //  内存消耗 :41.7 MB, 在所有 JavaScript 提交中击败了77.38%的用户

  if (!root) return null;

  if (root.val === val) return root;

  if (root.val < val) return searchBST(root.right, val);

  return searchBST(root.left, val);
};
