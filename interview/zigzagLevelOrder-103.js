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
var zigzagLevelOrder = function(root) {
  //  - - 感觉就只是单纯在层次遍历的基础上区分了一下奇偶行而已

  //  执行用时 :76 ms, 在所有 JavaScript 提交中击败了79.39%的用户
  //  内存消耗 :34 MB, 在所有 JavaScript 提交中击败了40.63%的用户

  let results = [];
  let queue = [];
  let currentLevel = 1;

  queue.push([root]);

  while (queue.length) {
    let nodes = queue.shift();
    let nextLevelNodes = [];
    let currentLevelNodes = [];
    let isOddLevel = currentLevel % 2 === 1;

    while (nodes.length) {
      let node = isOddLevel ? nodes.shift() : nodes.pop();

      if (!node) continue;

      isOddLevel
        ? nextLevelNodes.push(node.left, node.right)
        : nextLevelNodes.unshift(node.left, node.right);

      currentLevelNodes.push(node.val);
    }

    if (currentLevelNodes.length) {
      results.push(currentLevelNodes);
      queue.push(nextLevelNodes);

      currentLevel++;
    }
  }

  return results;
};
