/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  //  算是暴力解吧，本来想的是每次就只比一个叶节点，主要是想到两个树的结构不一样，没想到怎么去保存遍历到的节点位置的信息0-0.就暴力解了。。
  //  好吧当我没说，看了官方题解也是这样的- -。放心了

  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了91.25%的用户
  //  内存消耗 :34.6 MB, 在所有 JavaScript 提交中击败了78.57%的用户

  if (!root1 && !root2) return true;

  if (!root1 || !root2) return false;

  const getLeaves = (root, leaves) => {
    if (!root) return;

    if (!root.left && !root.right) {
      leaves.push(root.val);

      return;
    }

    getLeaves(root.left, leaves);
    getLeaves(root.right, leaves);
  };

  let root1Leaves = [];
  let root2Leaves = [];

  getLeaves(root1, root1Leaves);
  getLeaves(root2, root2Leaves);

  return root1Leaves.toString() === root2Leaves.toString();
};
