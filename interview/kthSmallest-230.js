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
 * @return {number}
 */
var kthSmallest = function(root, k) {
  //  因为二叉搜索树的中序遍历就是一个升序嘛，所以直接中序遍历继续一下当前的k就行了，
  //  之所以是用循环的话主要也是为了方便去return，如果是递归的话感觉做中断就麻烦一点？
  //  按照题目那个，如果会频繁的增删节点的话，我感觉最好还是存一个全局，每次增删的时候去修正kth的值，然后后面每次在获取的话就是O（1）了，就不用再去循环一遍QAQ
  //  但是那样的话最好是写一个类，然后封装一些私有的方法，而不是像现在这样单独写一个函数-0-，虽然也可以通过返回api的形式，但是总觉得这样就很蛋疼了

  //  执行用时 :88 ms, 在所有 JavaScript 提交中击败了97.77%的用户
  //  内存消耗 :39.3 MB, 在所有 JavaScript 提交中击败了50.00%的用户

  let currentK = 1;
  let stack = [];
  let currentNode = root;

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();

    if (currentK === k) {
      return currentNode.val;
    }

    currentNode = currentNode.right;

    currentK++;
  }
};
le;
