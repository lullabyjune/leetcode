/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  //  - -其实就是BFS的过程中判断一下nodes.length。。然后加一个指针。。。
  //  这居然是中等题QAQ
  //  话说最后先判断node.left 和 node.right 然后在push的话，用时少了12ms左右
  //  大概就是会少遍历一层的原因吧，因为如果不判断的话，最后一层全为Null的节点也会被遍历到- -。

  //  执行用时 :108 ms, 在所有 JavaScript 提交中击败了96.92%的用户
  //  内存消耗 :39.6 MB, 在所有 JavaScript 提交中击败了35.90%的用户

  let queue = [];

  queue.push([root]);

  while (queue.length) {
    let nodes = queue.shift();
    let nextLevelNodes = [];

    while (nodes.length) {
      let node = nodes.shift();

      if (!node) continue;

      node.next = nodes[0] ? nodes[0] : null;

      node.left && nextLevelNodes.push(node.left);
      node.right && nextLevelNodes.push(node.right);
    }

    nextLevelNodes.length && queue.push(nextLevelNodes);
  }

  return root;
};
