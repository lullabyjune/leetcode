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
var diameterOfBinaryTree = function(root) {
    //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了93.55%的用户
    //  内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了25.00%的用户
    let maxDeepth = 1
    
    const findLeaf = (root) => {
        if (!root) {
            return 0
        }
        
        let left = findLeaf(root.left),
            right = findLeaf(root.right)
        
        maxDeepth = Math.max(maxDeepth, left + right + 1)
        
        return Math.max(left, right) + 1
    }
    
    findLeaf(root)
    
    return maxDeepth - 1
};