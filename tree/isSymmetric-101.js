/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  //  看题解的0-0，没太想到怎么做，有思路，就是左右啥的，但是没想到具体的
  //  唯一想到的就是bfs一遍然后去根据层次镜像比较，但是又因为要记录Null，所以在bfs之后会多最后一层的null，又得记录高度，就觉得很傻逼就没那么做了0-0

  const isMirror = (left, right) => {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;

    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  };

  return isMirror(root, root);

  //  看了递归版本的，然后自己写了一个循环的0-0.

  // let queue = [];

  // queue.push(root);
  // queue.push(root);

  // while (queue.length) {
  //   let node1 = queue.shift(),
  //     node2 = queue.shift();

  //   if (!node1 && !node2) continue;
  //   if (!node1 || !node2) return false;

  //   if (node1.val !== node2.val) return false;

  //   queue.push(node1.left, node2.right, node1.right, node2.left);
  // }

  // return true;
};
