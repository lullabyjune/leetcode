/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了97.73%的用户
    //  内存消耗 :37.7 MB, 在所有 JavaScript 提交中击败了9.09%的用户
    //  这题- -怎么说呢。。。
    //  总觉得有更好的解法，就不想回溯，但是好像。。又想不到啥特别好的解法。。就很蛋疼很恶心人
    //  还有回溯每次复制数组真的恶心- -。
    let result = -1
    
    const getAllResults = (arr, nowArr) => {
        if (arr.length === 0) {
            let num = nowArr.join('')
            
            if (num <= 2359 && num[2] < 6 && num >= result) {
                result = num
            }
            
            return
        }
        
        for (let i = 0, length = arr.length; i < length; i++) {
            let nextArr = arr.slice(),
                nextNum = nextArr.splice(i, 1)[0]
                    
            getAllResults(nextArr, [...nowArr, nextNum])
        }
    }
    
    const getDateStr = (num) => {
        if (num === 0)  return '00:00'

        let str = '' + num
        
        return `${str[0]}${str[1]}:${str[2]}${str[3]}`
    }
    
    getAllResults(A, [])
    
    if (result > -1) {
        return getDateStr(result)
    }
    
    return ''
};