/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    //  记录0的index去计算
    //  其实两种的时间性能差不太多- -，记录的话内存占用会多一点。
    //  时间大概都是120 - 140ms（击败70% - 90%），内存38 - 42m(击败100% - 40%)
        
    //     let zeroIndexArr = [-1],
    //         length = A.length,
    //         max = Number.MIN_SAFE_INTEGER
        
    //     A.forEach((num, index) => {
    //         if (num === 0)  zeroIndexArr.push(index)
    //     })
        
    //     zeroIndexArr.push(A.length)
        
    //     if (K >= zeroIndexArr.length - 2) {
    //         return A.length
    //     }
        
    //     for (let i = 0, maxIndex = zeroIndexArr.length - 1 - K; i < maxIndex; i++) {
    //         let left = zeroIndexArr[i],
    //             right = zeroIndexArr[i + K + 1]
            
    //         max = Math.max(max, right - left - 1)
    //     }
        
    //     return max
        
    //  滑动窗口
        let left = 0,
            right = 0,
            max = 0,
            zeroCount = 0
        
        for (let i = 0, length = A.length; i < length; i++) {
            if (A[i] === 0) {
                zeroCount++
            }
            
            while (zeroCount > K) {
                if (A[left] === 0)  zeroCount--
                left++
            }
            
            right = i
            max = Math.max(max, right - left + 1)
        }
        
        max = Math.max(max, right - left + 1)
        
        
        return max
    };