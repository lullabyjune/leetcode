/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    //  这个题。。。咋说呢。
    //  第一眼做这感觉很简单。实际上也写了，也是有思路
    //  就是nm一直有些情况考虑不到，一直面向用例编程，我吐了
    //  一开始思路就不对0-0.恶心

    //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了90.24%的用户
    //  内存消耗 :36.5 MB, 在所有 JavaScript 提交中击败了77.78%的用户
    
    if (num == 0 || k >= num.length)    return '0'
    
    let stack = [],
        resL = num.length - k
    
    for (let i = 0, length = num.length; i < length; i++) {
        if ((stack[stack.length - 1] || -1) > num[i] && k > 0) {
            stack.pop()
            k--
            i--
            continue
        }
        stack.push(num[i])
    }
    
    let notZeroIndex = 0
    
    while (notZeroIndex < stack.length && stack[notZeroIndex] == 0)    notZeroIndex++
    
    return notZeroIndex === stack.length ? '0' : stack.slice(notZeroIndex, notZeroIndex + resL).join('')
};

console.log(removeKdigits('10200', 1))