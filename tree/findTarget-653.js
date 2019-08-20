/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  //  还是利用了BST的中序遍历是递增数列来做。递归的时候存了一个preNodes去判断区间，
  //  要是以前的话，我大概会先遍历一遍树，然后排序，然后滑动窗口QAQ。嘻嘻嘻。。

  //  执行用时 :112 ms, 在所有 JavaScript 提交中击败了95.35%的用户
  //  内存消耗 :41.5 MB, 在所有 JavaScript 提交中击败了67.65%的用户

  if (!root) return false;

  let result = false;

  const inOrder = (root, preNodes) => {
    if (!root) return;

    inOrder(root.left, preNodes);

    if (preNodes.length) {
      let min = preNodes[0] + root.val;
      let max = preNodes[preNodes.length - 1] + root.val;

      if (max === k || min === k) {
        result = true;
      } else if (max > k && min < k) {
        for (let i = 1, length = preNodes.length - 1; i < length; i++) {
          let sum = preNodes[i] + root.val;

          if (sum === k) {
            result = true;

            return;
          }
        }
      }
    }

    preNodes.push(root.val);

    inOrder(root.right, preNodes);
  };

  inOrder(root, []);

  return result;
};
