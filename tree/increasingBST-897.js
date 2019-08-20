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
var increasingBST = function(root) {
  //  记一个沙雕的暴力解。。
  //  - -看题解也有这种解法。。。蛋疼了。。

  //  执行用时 :208 ms, 在所有 JavaScript 提交中击败了86.11%的用户
  //  内存消耗 :42.8 MB, 在所有 JavaScript 提交中击败了76.00%的用户

  if (!root) return null;

  let nodes = [];
  let newTree = new TreeNode(null);
  let head = newTree;

  const inOrder = root => {
    if (!root) return;

    inOrder(root.left);

    nodes.push(root.val);

    inOrder(root.right);
  };

  inOrder(root);

  for (let node of nodes) {
    head.right = new TreeNode(node);

    head = head.right;
  }

  return newTree.right;
};
