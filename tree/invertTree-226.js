/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了90.10%的用户
  //  内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了51.48%的用户

  //  -0-日常递归

  if (!root)  return  root
  
  let tmpNode = root.left
  
  root.left = root.right
  root.right = tmpNode
  
  invertTree(root.left)
  invertTree(root.right)
  
  return root
};