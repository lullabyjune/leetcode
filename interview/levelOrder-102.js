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
var levelOrder = function(root) {
  //  感觉之前刷树的时候，BFS用的还是蛮多的QAQ
  //  所以现在写起来驾轻就熟.jpg-w-

  //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了56.37%的用户
  //  内存消耗 :34.9 MB, 在所有 JavaScript 提交中击败了20.90%的用户

  let results = [];
  let queue = [];

  queue.push([root]);

  while (queue.length) {
    let levelsNodes = [];
    let nodes = queue.shift();
    let nextLevels = [];

    while (nodes.length) {
      let node = nodes.shift();

      if (!node) continue;

      levelsNodes.push(node.val);
      nextLevels.push(node.left, node.right);
    }

    if (levelsNodes.length) {
      results.push(levelsNodes);
      queue.push(nextLevels);
    }
  }

  return results;
};
