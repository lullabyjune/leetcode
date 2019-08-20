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
 * @return {number}
 *
 * 开始刷树0-0
 */
var rangeSumBST = function(root, L, R) {
  //  执行用时 :304 ms, 在所有 JavaScript 提交中击败了87.68%的用户
  //  内存消耗 :67.3 MB, 在所有 JavaScript 提交中击败了73.08%的用户
  //  递归0-0

  let sum = 0;

  const dfs = root => {
    if (!root) {
      return;
    }

    if (root.val < L) {
      dfs(root.right);
    } else if (root.val > R) {
      dfs(root.left);
    } else {
      sum += root.val;
      dfs(root.left);
      dfs(root.right);
    }
  };

  dfs(root);

  return sum;

  //  循环
  // let sum = 0,
  //   stack = [];

  // stack.push(root);

  // while (stack.length) {
  //   let node = stack.pop();

  //   if (!node) continue;

  //   if (node.val >= L && node.val <= R) {
  //     sum += node.val;
  //     stack.push(node.left);
  //     stack.push(node.right);
  //   } else if (node.val < L) {
  //     stack.push(node.right);
  //   } else {
  //     stack.push(node.left);
  //   }
  // }

  // return sum;


  //  bfs
};
