/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {

    //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了89.66%的用户
    //  内存消耗 :36 MB, 在所有 JavaScript 提交中击败了14.29%的用户
    //  没一点头绪，看评论做的。
    //  在不重建树的情况下，虽然我想到是匹配，但是没想到是这样子QAQ。想的太少了大概是
    //  最后这个结果就类似括号匹配，对`#`做规约，最后判断节点。有点意思的-0-.

    let stack = [],
        nodes = preorder.split(','),
        index = 0
    
    const reduce = () => {
        if (stack.length < 3)   return
        
        if (stack[stack.length - 1] === stack[stack.length - 2] && stack[stack.length - 1] === '#' && stack[stack.length - 3] !== '#') {
            stack.splice(-3, 2)
            reduce()
        }
    }
    
    while(nodes[index]) {
        stack.push(nodes[index])
        
        if (nodes[index++] === '#')   reduce()
    }
    
    return stack.length === 1 && stack[0] === '#'
};