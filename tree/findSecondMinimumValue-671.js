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
var findSecondMinimumValue = function(root) {
  //  有一个用例没跑通，算是比较取巧的一种方法，想法是如果根节点的值不大于子节点的值，那么第二小的节点值必然存在于root, root.left, root.right之间
  //  就根本不需要去遍历子树。emmmm但是有一些小细节，懒得去处理了QAQ

  // if (!root)  return -1

  // if (!root.left && !root.right)   return -1

  // let resultsArray = [root.val, (root.left && root.left.val) || root.val, (root.right && root.right.val) || root.val]

  // let results = Array.from(new Set(resultsArray)).sort((a, b) => a - b)

  // return results[1] === undefined ? -1 : results[1]

  //  有点类似上面的写法，但是有点区别的是这次还是老老实实去遍历了，只不过是已经肯定确定的是，根节点是最小的节点
  //  所以就是后面但凡有不等于根节点的，就和result比大小，最后取一个最小的就ok了

  //  执行用时 :68 ms, 在所有 JavaScript 提交中击败了95.83%的用户
  //  内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了62.50%的用户

  if (!root) return -1;

  let min = root.val;
  let result = Number.MAX_SAFE_INTEGER;

  const preOrder = root => {
    if (!root) return;

    root.val !== min && (result = Math.min(result, root.val));

    preOrder(root.left);
    preOrder(root.right);
  };

  preOrder(root);

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};
