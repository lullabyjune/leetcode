/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    //  执行用时 :96 ms, 在所有 JavaScript 提交中击败了94.33%的用户
    //  内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了94.62%的用户
    //  好像在剑指offer上做过
    //  今天真的状态极差.jpg


    if (num <= 0)   return false
    
    while (num % 2 === 0)   num /= 2
    while (num % 3 === 0)   num /= 3
    while (num % 5 === 0)   num /= 5
    
    return num === 1
};