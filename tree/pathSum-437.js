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
 * @return {number}
 */
var pathSum = function(root, sum) {
  //  执行用时 :120 ms, 在所有 JavaScript 提交中击败了79.56%的用户
  //  内存消耗 :36.6 MB, 在所有 JavaScript 提交中击败了84.38%的用户

  if (!root)  return 0
  
  const dfs = (root, sum) => {
      if (!root) return 0
      
      let result = 0
      
      if (root.val === sum) result++
      
      result += dfs(root.left, sum - root.val)
      result += dfs(root.right, sum - root.val)
      
      return result
  }
  
  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};