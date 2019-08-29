/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  //  看题解的- -..差距是真的大。。
  //  可能这就是，别人写的代码吧- -。。

  //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了99.58%的用户
  //  内存消耗 :37.5 MB, 在所有 JavaScript 提交中击败了59.32%的用户

  let nodeValueIndexMap = new Map();
  let preIndex = 0;

  for (let [index, value] of inorder.entries()) {
    nodeValueIndexMap.set(value, index);
  }

  const build = (leftIndex, rightIndex) => {
    if (leftIndex === rightIndex) return null;

    let rootValue = preorder[preIndex];
    let root = new TreeNode(rootValue);
    let index = nodeValueIndexMap.get(rootValue);

    preIndex++;

    root.left = build(leftIndex, index);
    root.right = build(index + 1, rightIndex);

    return root;
  };

  return build(0, inorder.length);

  //  - -一开始还没想到要怎么做。。
  //  也不算没想到吧，，就是在递归和循环纠结了很久- -，结果循环没写出来，就递归了- -。
  //  巨慢无比的原因大概是slice，主要是不太想改原函数的参数，虽然可以自己写一个内置函数在里面。。

  //  执行用时 :280 ms, 在所有 JavaScript 提交中击败了8.05%的用户
  //  内存消耗 :127.5 MB, 在所有 JavaScript 提交中击败了23.73%的用户

  // if (!preorder.length)   return null

  // let root = new TreeNode(preorder[0]),
  //     rootIndexInOrder = inorder.findIndex(node => node === root.val)

  // root.left = rootIndexInOrder === 0 ? null : buildTree(preorder.slice(1, rootIndexInOrder + 1), inorder.slice(0, rootIndexInOrder))
  // root.right = rootIndexInOrder === inorder.length - 1 ? null : buildTree(preorder.slice(rootIndexInOrder + 1), inorder.slice(rootIndexInOrder + 1))

  // return root
};
