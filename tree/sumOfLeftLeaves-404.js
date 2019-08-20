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
var sumOfLeftLeaves = function(root) {
  //  执行用时 :68 ms, 在所有 JavaScript 提交中击败了99.20%的用户
  //  内存消耗 :34.1 MB, 在所有 JavaScript 提交中击败了55.56%的用户

  let sum = 0
  
  if (!root)  return sum
  
  const dfs = (root) => {
      if (!root)  return
      
      if (root.left && !root.left.left && !root.left.right)   sum += root.left.val
      
      dfs(root.left)
      dfs(root.right)
  }
  
  dfs(root)
  
  return sum
};