/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了98.31%的用户
  //  内存消耗 :39 MB, 在所有 JavaScript 提交中击败了82.35%的用户

  if (!root) return root;

  if (root.val < L) {
    return trimBST(root.right, L, R);
  } else if (root.val > R) {
    return trimBST(root.left, L, R);
  } else {
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
  }

  return root;
};
