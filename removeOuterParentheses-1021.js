/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了93.57%的用户
    //  内存消耗 :36.1 MB, 在所有 JavaScript 提交中击败了53.85%的用户
    
    //  咋说呢- -，还是看别人的答案的。
    //  栈。。哎-0-。果然数据结构捞比没跑了
    //  硬要做也能做，但是，始终get不到这种点。就很烦很难受.jpg-0-
    //  思路也有问题吧，我自己想的是全部进栈，然后弹出的时候最后一个不弹出
    //  这思路倒是能解决最旁边括号的问题，但是要保障他原本括号的顺序就很蛋疼了。
    let left = 0,
        stack = [],
        index = 0
    
    while (S[index]) {
        if (S[index] === '(' && left++ > 0) stack.push('(')
        if (S[index] === ')' && --left > 0) stack.push(')')
        index++
    }
    
    return stack.join('')
};