/**
 * @param {number[]} T
 * @return {number[]}
 */

 // 刷了一天的栈和队列0-0.
 // 这题暴力解虽然也能解，但是不得不说用栈的话，的确会少走很多次流程
 // 并且用栈之后，整个思路其实是已经就定在那个方向了，会好想很多。
 
var dailyTemperatures = function(T) {
    //  执行用时 :216 ms, 在所有 JavaScript 提交中击败了93.92%的用户
    //  内存消耗 :44.5 MB, 在所有 JavaScript 提交中击败了16.67%的用户

    let stack = [],
        res = []
    
    for (let i = 0, length = T.length; i < length; i++) {
        if (!stack.length || T[i] < T[stack[stack.length - 1]]) {
            stack.push(i)
            continue
        }
        
        while (stack.length && T[stack[stack.length - 1]] < T[i]) {
            let item = stack.pop()
            
            res[item] = i - item
        }
        
        stack.push(i)
    }
    
    while (stack.length) {
        res[stack.pop()] = 0
    }
    
    return res
};