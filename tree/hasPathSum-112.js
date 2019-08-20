/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  //  执行用时 :88 ms, 在所有 JavaScript 提交中击败了94.20%的用户
  //  内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了54.02%的用户

  if (!root) return false
  
  sum -= root.val
  
  if (sum === 0 && !root.left && !root.right) return true
  
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};