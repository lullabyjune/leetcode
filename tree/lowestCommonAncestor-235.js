/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  //  执行用时 :104 ms, 在所有 JavaScript 提交中击败了96.93%的用户
  //  内存消耗 :43.6 MB, 在所有 JavaScript 提交中击败了67.59%的用户

  //  果然说是，树的题， - -用递归都能解决.jpg？

  let min = Math.min(p.val, q.val),
      max = Math.max(p.val, q.val)
  
  if (max >= root.val && min <= root.val)   return root
  
  if (max < root.val) return lowestCommonAncestor(root.left, p, q)
  
  if (min > root.val) return lowestCommonAncestor(root.right, p, q)
};