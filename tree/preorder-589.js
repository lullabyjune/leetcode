/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  //  递归版
  //  执行用时 :1000 ms, 在所有 JavaScript 提交中击败了50.00%的用户
  //  内存消耗 :81.3 MB, 在所有 JavaScript 提交中击败了31.58%的用户

  //  其实我不是很懂为什么下面那种单纯就把node放在reduce的种子里的写法，性能上会差个一百ms。？？？
  if (!root) return [];

  let node = root.val;

  let preNodes = root.children.reduce((total, cur) => {
    total.push(...preorder(cur));
    return total;
  }, []);

  preNodes.unshift(node);

  return preNodes;

  //  return preNodes = root.children.reduce((total, cur) => {
  //   total.push(...preorder(cur));
  //   return total;
  // }, [root.val]);

  //  循环版
  //  执行用时 :912 ms, 在所有 JavaScript 提交中击败了94.09%的用户
  //  内存消耗 :81.8 MB, 在所有 JavaScript 提交中击败了27.37%的用户

  // if (!root) return [];

  // let queue = [];
  // let results = [];

  // queue.push(root);

  // while (queue.length) {
  //   let node = queue.shift();

  //   if (!node) continue;

  //   results.push(node.val);

  //   queue.unshift(...node.children);
  // }

  // return results;
};
