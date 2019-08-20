/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *
 * 树-0-
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  //  执行用时 :68 ms, 在所有 JavaScript 提交中击败了93.11%的用户
  //  内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了32.20%的用户

  //  循环

  let stack1 = [],
    stack2 = [];

  if (!p && !q) return true;

  if (!p || !q) return false;

  stack1.push(p);
  stack2.push(q);

  while (stack1.length) {
    let node1 = stack1.pop(),
      node2 = stack2.pop();

    if (!node1 && !node2) {
      continue;
    }

    if (!node1 || !node2) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }

    stack1.push(node1.left);
    stack1.push(node1.right);

    stack2.push(node2.left);
    stack2.push(node2.right);
  }

  return true;

  //  递归版

  // if (p && q) {
  //     if (p.val === q.val) {
  //         return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  //     } else {
  //         return false
  //     }
  // } else if (p || q) {
  //     return false
  // } else {
  //     return true
  // }
};
