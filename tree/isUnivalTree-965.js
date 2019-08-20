/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  //  总算不是暴力解了.jpg

  //  执行用时 :68 ms, 在所有 JavaScript 提交中击败了93.89%的用户
  //  内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了41.86%的用户

  if (!root) return true;

  if (!root.left && !root.right) return true;

  if (
    (root.left && root.val !== root.left.val) ||
    (root.right && root.val !== root.right.val)
  )
    return false;

  return isUnivalTree(root.left) && isUnivalTree(root.right);
};
