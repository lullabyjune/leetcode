/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  //  看题解写的QAQ，不想暴力解。。但是一开始写的又总有点问题，而且还没debug出来啥问题，因为是大数据用例，还显示不出来 - -，就很懵逼了。。
  //  只能大概确定问题在哪，但是不能确定具体为啥，就很烦- -

  //  执行用时 :260 ms, 在所有 JavaScript 提交中击败了84.85%的用户
  //  内存消耗 :51.9 MB, 在所有 JavaScript 提交中击败了66.67%的用户

  let result = 0;

  const dfs = root => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);
    let sumLeft = 0;
    let sumRight = 0;

    if (root.left && root.left.val === root.val) {
      sumLeft += left + 1;
    }

    if (root.right && root.right.val === root.val) {
      sumRight += right + 1;
    }

    result = Math.max(result, sumLeft + sumRight);

    return Math.max(sumLeft, sumRight);
  };

  dfs(root);

  return result;
};
