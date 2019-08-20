/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  //  执行用时 :892 ms, 在所有 JavaScript 提交中击败了88.34%的用户
  //  内存消耗 :81.2 MB, 在所有 JavaScript 提交中击败了54.79%的用户

  //  感觉每次N叉树的这个时间和内存都特别高- -。为啥

  if (!root) return 0;

  let currentMax = -1;

  if (root.children) {
    for (let child of root.children) {
      currentMax = Math.max(currentMax, 1 + maxDepth(child));
    }
  }

  return Math.max(1, currentMax);
};
