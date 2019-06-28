/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    //  执行用时 :1972 ms, 在所有 JavaScript 提交中击败了53.33%的用户
    //  内存消耗 :124.4 MB, 在所有 JavaScript 提交中击败了25.00%的用户

    let ACharCache = [],
        resArr = [],
        BCharCache = {}
    
    const countChar = (strArr, countTo, type) => {
        let defaultValu = type === 'max' ? 0 : Number.MAX_SAFE_INTEGER
        
        strArr.forEach((str, index) => {
            let cache = {}

            if (!type) {
                countTo[index] = {}
                cache = countTo[index]
            }
            
            for (let i = 0, length = str.length; i < length; i++) {
                if (!cache[str[i]]) cache[str[i]] = 0
                cache[str[i]]++
            }

            type && Object.keys(cache).forEach(key => {
                countTo[key] = Math[type](cache[key], (countTo[key] || defaultValu))
            })
        })
    }

    countChar(A, ACharCache)
    countChar(B, BCharCache, 'max')

    let keys = Object.keys(BCharCache)

    for (let i = 0, length = ACharCache.length; i < length; i++) {
        let flag = true

        for (let j = 0, jL = keys.length; j < jL; j++) {
            if ((ACharCache[i][keys[j]] || 0) < BCharCache[keys[j]]) {
                flag = false
                break
            }
        }

        if (flag)   resArr.push(A[i])
    }
    
    return resArr

    //  看别人的答案的，其实思路差不多，主要就是存储方式，我是hash，这是arr
    //  不得不说，，，数组效率比hash居然高这么多。。。吐了
    
    //  执行用时 :344 ms, 在所有 JavaScript 提交中击败了86.67%的用户
    //  内存消耗 :79.3 MB, 在所有 JavaScript 提交中击败了50.00%的用户

    // const getCharIndex = (char) => char.charCodeAt() - 97
    
    // const getCharArr = (str) => {
    //     let arr = new Array(26).fill(0)
        
    //     for (let char of str) {
    //         arr[getCharIndex(char)]++
    //     }
        
    //     return arr
    // }
    
    // const isNormal = (target, compareTo) => {
    //     for (let j = 0, innerL = compareTo.length; j < innerL; j++) {
    //         if (target[j] < compareTo[j])    return false
    //     }
        
    //     return true
    // }
    
    
    // B = B.map(str => getCharArr(str))
    
    // let BArr = new Array(26).fill(0)
    
    // for (let i = 0, length = B.length; i < length; i++) {
    //     for (let j = 0, innerL = B[i].length; j < innerL; j++) {
    //         BArr[j] = Math.max(BArr[j], B[i][j])
    //     }
    // }
    
    // return A.filter(str => isNormal(getCharArr(str), BArr))
};

let A = ["amazon","apple","facebook","google","leetcode"],
    B = ["e","o"]

// A = ["amazon","apple","facebook","google","leetcode"]
// B = ["ec","oc","ceeo"]

console.log(wordSubsets(A, B))