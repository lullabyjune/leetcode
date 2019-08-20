/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  //  感觉层次遍历，还是循环简单很多QAQ

  //  执行用时 :100 ms, 在所有 JavaScript 提交中击败了79.80%的用户
  //  内存消耗 :40 MB, 在所有 JavaScript 提交中击败了5.88%的用户

  let queue = [];
  let results = [];

  queue.push([root]);

  while (queue.length) {
    let nodes = queue.shift();
    let nextQueue = [];
    let currentSum = 0;
    let currentNodeCount = 0;

    for (let node of nodes) {
      if (!node) continue;

      nextQueue.push(node.left, node.right);
      currentSum += node.val;
      currentNodeCount++;
    }

    if (currentNodeCount) {
      queue.push(nextQueue);
      results.push(currentSum / currentNodeCount);
    }
  }

  return results;
};
