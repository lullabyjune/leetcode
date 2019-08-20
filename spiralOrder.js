/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    //  执行用时 :64 ms, 在所有 JavaScript 提交中击败了99.36%的用户
    //  内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了5.13%的用户
    //  搞不懂为啥我这个内存那么高- -。看了一眼时间第一的那个兄弟。还存了俩数组。为啥我的内存才5.13%啊-0-
    
    let left = 0,
        top = 0,
        bottom = matrix.length - 1,
        right = matrix[0] ? matrix[0].length - 1 : -1,
        resArr = []
    
    while (true) {
        for (let i = left; i <= right; i++) resArr.push(matrix[top][i])
        if (++top > bottom) break
        
        for (let i = top; i <= bottom; i++) resArr.push(matrix[i][right])
        if (--right < left) break
        
        for (let i = right; i >= left; i--) resArr.push(matrix[bottom][i])
        if (--bottom < top) break
        
        for (let i = bottom; i >= top; i--) resArr.push(matrix[i][left])
        if (++left > right) break
    }
        
    return resArr
};