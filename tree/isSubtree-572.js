/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

const isEqual = (s, t) => {
  if (!s && !t) return true;

  if (!s || !t) return false;

  if (s.val === t.val)
    return isEqual(s.left, t.left) && isEqual(s.right, t.right);

  return false;
};

var isSubtree = function(s, t) {
  //  执行用时 :112 ms, 在所有 JavaScript 提交中击败了90.00%的用户
  //  内存消耗 :38.8 MB, 在所有 JavaScript 提交中击败了51.16%的用户

  //  看题解写的
  //  怎么说呢，思路很清晰，但是有些地方没捋那么清楚所以一直没写出来，又不想暴力解。就只好看题解了QAQ
  //  以后一定用笔写.jpg，真的写出来捋一捋根本就没啥难度的东西。。

  if (!s && !t) return true;

  if (!s || !t) return false;

  if (s.val === t.val) {
    return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};
