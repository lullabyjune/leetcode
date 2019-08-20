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
var postorder = function(root) {
  //  递归版, 大概是因为后面concat的问题所以性能巨低？但是这样写看着真的好舒服QAQ

  //  执行用时 :1024 ms, 在所有 JavaScript 提交中击败了31.17%的用户
  //  内存消耗 :80.5 MB, 在所有 JavaScript 提交中击败了56.10%的用户

  if (!root) return [];

  return root.children
    .reduce((total, cur) => {
      total.push(...postorder(cur));

      return total;
    }, [])
    .concat([root.val]);

  //  循环版

  //  执行用时 :940 ms, 在所有 JavaScript 提交中击败了72.73%的用户
  //  内存消耗 :81 MB, 在所有 JavaScript 提交中击败了39.03%的用户

  // if (!root) return [];

  // let stack = [];
  // let results = [];

  // stack.push(root);

  // while (stack.length) {
  //   let node = stack.pop();

  //   if (!node) continue;

  //   if (node.children.length) {
  //     stack.push(...node.children);
  //   }

  //   results.unshift(node.val);
  // }

  // return results;
};
