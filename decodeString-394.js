/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let resStr = '',
        countStack = [],
        stack = [],
        tmpNumber = '',
        tmpStr = ''
    
    const getRepeatStr = (str, times) => {
        let res = '',
            index = 0
        
        while (index++ < times) {
            res += str
        }
        
        return res
    }
    
    for (let i = 0, length = s.length; i < length; i++) {
        if (parseInt(s[i])) {
            tmpNumber += s[i]
        } else if (s[i] === '[') {
            countStack.push(+tmpNumber)
            tmpNumber = ''
        } else if (s[i] === ']') {
            stack.push(tmpStr)
            stack.push(getRepeatStr(stack.pop(), countStack.pop()))
            tmpStr = ''
        } else {
            tmpStr += s[i]
        }
    }
    
    return stack.pop()
};

console.log(decodeString('3[a]2[bc]'))