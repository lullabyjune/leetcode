/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  //  没想到什么太好的解法。。总觉得这样很蠢。。

  //  执行用时 :96 ms, 在所有 JavaScript 提交中击败了23.26%的用户
  //  内存消耗 :36.7 MB, 在所有 JavaScript 提交中击败了10.00%的用户

  let queue = [];

  queue.push([[root]]);

  while (queue.length) {
    let nextQueue = [];
    let nodes = queue.shift();
    let hasX = false;
    let hasY = false;

    for (let node of nodes) {
      let nodeHasX, nodeHasY;

      for (let innerNode of node) {
        let children = [];

        nodeHasX = nodeHasX || innerNode.val === x;
        nodeHasY = nodeHasY || innerNode.val === y;

        innerNode.left && children.push(innerNode.left);
        innerNode.right && children.push(innerNode.right);
        children.length && nextQueue.push(children);
      }

      if (nodeHasX && nodeHasY) return false;

      hasX = hasX || nodeHasX;
      hasY = hasY || nodeHasY;
    }

    if (hasX && hasY) return true;

    if (nextQueue.length) {
      queue.push(nextQueue);
    }
  }

  return false;
};
