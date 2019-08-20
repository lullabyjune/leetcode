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
var isValidBST = function(root) {
    //  执行用时 :96 ms, 在所有 JavaScript 提交中击败了91.23%的用户
    //  内存消耗 :38.2 MB, 在所有 JavaScript 提交中击败了23.90%的用户
    //  不是很懂为啥这个比下面那个消耗的内存还多QAQ

    const inRange = (num, range) => {
        return  num < (range[0] !== undefined ? range[0] : Number.MAX_SAFE_INTEGER)
                &&
                num > (range[1] !== undefined ? range[1] : Number.MIN_SAFE_INTEGER)
    }
    
    const validFn = (node, range) => {
        if (!node)  return true
        
        let nextLeftRange,
            nextRightRange
        
        if (!inRange(node.val, range))  return false

        nextLeftRange = [node.val, range[1]],
        nextRightRange = [range[0], node.val]
            
        return validFn(node.left, nextLeftRange) && validFn(node.right, nextRightRange)
    }
    
    return validFn(root, [])

    //  执行用时 :104 ms, 在所有 JavaScript 提交中击败了82.19%的用户
    //  内存消耗 :37.7 MB, 在所有 JavaScript 提交中击败了42.14%的用户

    // const inRange = (num, range) => {
    //     return  num < (range[0] || Number.MAX_SAFE_INTEGER)
    //             &&
    //             num > (range[1] || Number.MIN_SAFE_INTEGER)
    // }
    
    // const validFn = (node, range) => {
    //     if (!node)  return true
        
    //     if (node.left && node.val <= node.left.val) return false
    //     if (node.right && node.val >= node.right.val)   return false
        
    //     if (range && !inRange(node.val, range)) return false
        
    //     if (range) {
    //         var nextLeftRange = range[0] ? range : [node.val, range[1]],
    //             nextRightRange = range[1] ? range : [range[0], node.val]
    //     }
        
    //     return range 
    //             ? validFn(node.left, nextLeftRange) && validFn(node.right, nextRightRange)
    //             : validFn(node.left, [root.val]) && validFn(node.right, [null, root.val])
    // }
    
    
    
    // return validFn(root)
};