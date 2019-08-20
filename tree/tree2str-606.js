/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  //  执行用时 :96 ms, 在所有 JavaScript 提交中击败了80.95%的用户
  //  内存消耗 :38.7 MB, 在所有 JavaScript 提交中击败了25.00%的用户

  if (!t) return "";

  let leftStr = `(${tree2str(t.left)})`;
  let rightStr = `(${tree2str(t.right)})`;
  let retStr = t.val;

  if (leftStr === "()") {
    return rightStr === "()" ? `${retStr}` : `${retStr}${leftStr}${rightStr}`;
  } else {
    return rightStr === "()"
      ? `${retStr}${leftStr}`
      : `${retStr}${leftStr}${rightStr}`;
  }
};
