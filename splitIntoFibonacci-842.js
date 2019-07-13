/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    //  执行用时 :196 ms, 在所有 JavaScript 提交中击败了57.14%的用户
    //  内存消耗 :43.4 MB, 在所有 JavaScript 提交中击败了25.00%的用户
    
    let res = -1,
        MAX = 2**31 - 1
    
    const canContinue = (str, fib) => {
        if (str.length === 0 && fib.length < 3) return false

        if (res !== -1) return false

        if (fib.length < 3) return true
        
        return fib[fib.length - 3] + fib[fib.length - 2] === fib[fib.length - 1]
    }
    
    const isLegalNumber = (num) => {
        return num <= MAX
    }

    const isStartWithZero = (num, count) => {
        return ('' + num).length !== count
    }
    
    const splitIntoFib = (str, nowFib) => {
        if (!str.length) {
            nowFib.length >= 3 && (res = nowFib)
            
            return
        }
        
        for (let i = 1, length = str.length; i <= length; i++) {
            let tmpNum = +str.substr(0, i)
            if(!isStartWithZero(tmpNum, i) && isLegalNumber(tmpNum)) {
                let tmpFib = [...nowFib, tmpNum]
                
                if (canContinue(str, tmpFib))  splitIntoFib(str.substr(i), tmpFib)
            }
        }
    }
    
    splitIntoFib(S, [])
    
    return res === -1 ? [] : res
};

let str = '123456579'

// str = '11235813'

// str = '112358130'

str = '0123'

console.log(splitIntoFibonacci(str))