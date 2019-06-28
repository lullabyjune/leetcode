/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    //  依然不是完全自己做的
    //  想到了后序，想到了转移节点树地柜
    //  唯独没想到怎么让flatten后的右子树连到flatten后的左子树后面
    //  md，今天真是惨淡的一天
    //  可能这就是菜逼的真实写照QAQ。面向评论解题

    //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了80.23%的用户
    //  内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了31.58%的用户

    if (!root)  return
    
    flatten(root.left)
    flatten(root.right)
    
    let tmp = root.right
    root.right = root.left
    root.left = null
    
    while (root.right) {
        root = root.right
    }
    
    root.right = tmp
};