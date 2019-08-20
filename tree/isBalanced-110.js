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
var isBalanced = function(root) {

  //  执行用时 :100 ms, 在所有 JavaScript 提交中击败了80.90%的用户
  //  内存消耗 :37.5 MB, 在所有 JavaScript 提交中击败了53.47%的用户

  //  还是看题解做的。咋说呢。对于递归，我始终还是用的比较死板。只能是想到了递归，但是没想到用递归去计算这个高度值返回然后判断0-0
  let result = true
  
  const dfs = (root) => {
      if (!root)  return 0
      
      let left = dfs(root.left) + 1,
          right = dfs(root.right) + 1
      
      if (Math.abs(left - right) > 1) result = false
      
      return Math.max(left, right)
  }
  
  dfs(root)
  
  return result
};