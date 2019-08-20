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
var getMinimumDifference = function(root) {
  //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了100.00%的用户
  //  内存消耗 :37.9 MB, 在所有 JavaScript 提交中击败了58.62%的用户

  //  0-0自从知道二叉搜索树的中序遍历就是一个非递减之后-0-.是吧。这种感觉就简单了很多，单纯比较单纯节点和前驱节点就ojbk了

  let min = Number.MAX_SAFE_INTEGER;
  let pre = new TreeNode(null);

  const inOrder = root => {
    if (!root) return;

    inOrder(root.left);

    if (pre && pre.val !== null) {
      let diff = root.val - pre.val;

      min = Math.min(diff, min);
    }

    pre = root;

    inOrder(root.right);
  };

  inOrder(root);

  return min;
};
