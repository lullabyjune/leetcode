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
var maxDepth = function(root) {
  //  递归版的0-0
  //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了93.43%的用户
  //  内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了40.82%的用户

  const dfs = (root, depth) => {
    if (!root) return depth;

    depth++;

    return Math.max(dfs(root.left, depth), dfs(root.right, depth));
  };

  return dfs(root, 0);

  //  循环
  //  内存比递归少一点，大概是因为不用保存那些函数栈吧，但是不是说es6之后有尾调用优化的递归么，就是不会再弄很多栈去保存信息了0-0，一脸懵逼。
  // let queue = [];
  // let depth = 0;

  // queue.push({
  //   treeNode: root,
  //   depth: 1
  // });

  // while (queue.length) {
  //   let node = queue.pop();

  //   if (node.treeNode) {
  //     depth = Math.max(depth, node.depth);

  //     queue.push(
  //       {
  //         treeNode: node.treeNode.left,
  //         depth: node.depth + 1
  //       },
  //       {
  //         treeNode: node.treeNode.right,
  //         depth: node.depth + 1
  //       }
  //     );
  //   }
  // }

  // return depth;
};
