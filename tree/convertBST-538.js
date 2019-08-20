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
var convertBST = function(root) {
  //  执行用时 :112 ms, 在所有 JavaScript 提交中击败了96.97%的用户
  //  内存消耗 :40 MB, 在所有 JavaScript 提交中击败了68.97%的用户

  let currentSum;

  const RLI = root => {
    if (!root) return;

    RLI(root.right);

    if (!currentSum) {
      currentSum = root.val;
    } else {
      currentSum += root.val;
    }

    let rootVal = root.val;

    root.val = currentSum;

    RLI(root.left);
  };

  RLI(root, 0);

  return root;
};
