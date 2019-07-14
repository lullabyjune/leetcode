/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了97.37%的用户
    //  内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了76.19%的用户

    let stack = []
    
    const getInt = (number) => {
        if (number < 0) return Math.ceil(number)
        
        return Math.floor(number)
    }
    
    const operationsFn = (operation) => {
        let number_2 = stack.pop(),
            number_1 = stack.pop()
        
        switch (operation) {
            case '+': return number_1 + number_2; break;
            case '-': return number_1 - number_2; break;
            case '/': return getInt(number_1 / number_2); break;
            case '*': return number_1 * number_2
        }
    }

    const operations = ['+', '-', '/', '*']
    
    for (let i = 0, length = tokens.length; i < length; i++) {
        let nextPushItem = tokens[i]
        
        if (operations.includes(nextPushItem)) {
            nextPushItem = operationsFn(nextPushItem)
        }
        
        stack.push(+nextPushItem)
    }
    
    return stack.pop()
};