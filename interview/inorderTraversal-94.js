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
var inorderTraversal = function(root) {
  //  递归就懒得写了，
  //  循环的，但是在外部用了个currentNode，暂时没想到怎么不用这个东西- - ，看了一眼官方题解和我差不多，就放心了

  //  执行用时 :76 ms, 在所有 JavaScript 提交中击败了69.25%的用户
  //  内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了49.25%的用户

  let results = [];
  let stack = [];
  let currentNode = root;

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();

    results.push(currentNode.val);

    currentNode = currentNode.right;
  }

  return results;
};
