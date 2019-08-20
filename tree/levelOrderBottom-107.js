/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  //  循环版本，感觉有些冗余，但是又没太想到怎么解决。
  //  执行用时 :76 ms, 在所有 JavaScript 提交中击败了93.33%的用户
  //  内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了29.19%的用户

  let queue = [];
  let results = [];

  queue.push([root]);

  while (queue.length) {
    let nodes = queue.shift();
    let nodePocket = [];
    let nextQueuePocket = [];

    while (nodes.length) {
      let node = nodes.shift();

      if (node) {
        nodePocket.push(node.val);
        nextQueuePocket.push(node.left, node.right);
      }
    }

    if (nodePocket.length) {
      results.unshift(nodePocket);
      queue.push(nextQueuePocket);
    }
  }

  return results;
};
