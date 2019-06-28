/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    const recordArr = ['A', 'L', 'P'],
          maxL = Math.floor(number / 3) * 2 + number % 3    //  L最多能有的个数
    
    const calcuArrangeOrCompose = (type, n, m) => {
        let result = 0
        
        if (type === 'arrange') {
            
        }
        
        if (type === 'compose') {
            
        }
        
        return result
    }
    
    const calcuArrangeByInsert = (inserted, insert, needArrange) => {
        if (insert === 1)   return inserted + 1
        
        let res = calcuArrangeOrCompose('compose', inserted + 1, insert),
        
        if (needArrange) {
            res = calcuArrangeOrCompose('arrange', insert, 1)
        }
    }
    
    const arrangeChar = (() => {
        const cache = {}
        
        return (pNumber, lNumber) => {
            if (lNumber === 0)  return 1
            if (lNumber === maxL)   return  1
            
            if (pNumber > lNumber) {
                let lBundle = Math.ceil(lNumber / 2),
                    key1 = `${pNumber},${lBundle}`,
                    key2 = `${pNumber},${lNumber}`,
                    count = 0,
                    hasDifference = lBundle === lNumber / 2
                
                if (!cache[key1])   cache[key1] = calcuArrangeByInsert(pNumber, lNumber, hasDifference)
            }
        }
    })()
    
    const composeAndArrangeChar = (number) => {
        //  因为A只能有1或0个，所以先考虑为0的情况计算，然后再从中随便选一个字母替换成A就行，也就是对称的其实
        let count = 0
        
        for (let i = 0; i <= maxL; i++) {
            count += arrangeChar(number - i, i)
        }
    }
    
    const getAllResults = (number) => {
        composeAndArrangeChar(number)
    }
    
    return getAllResults(n)
};