/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *
 *  开始刷树
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  //  执行用时 :144 ms, 在所有 JavaScript 提交中击败了54.92%的用户
  //  内存消耗 :41.3 MB, 在所有 JavaScript 提交中击败了15.96%的用户
  //  其实不是很懂为啥这个时间那么多，明明只是一次遍历

  let stack1 = [],
    stack2 = [];

  if (!t1 && t2) {
    return t2;
  }

  stack1.push(t1);
  stack2.push(t2);

  while (stack1.length) {
    let node1 = stack1.pop(),
      node2 = stack2.pop();

    if (node2 && node1) {
      node1.val += node2.val;

      if (node1.left && node2.left) {
        stack1.push(node1.left);
        stack2.push(node2.left);
      }

      if (!node1.left && node2.left) {
        node1.left = node2.left;
      }

      if (node1.right && node2.right) {
        stack1.push(node1.right);
        stack2.push(node2.right);
      }

      if (!node1.right && node2.right) {
        node1.right = node2.right;
      }
    }

    if (node2 && !node1) {
      node1 = node2;
    }
  }

  return t1;
};
