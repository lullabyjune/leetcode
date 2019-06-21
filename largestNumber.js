/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    //  执行用时 :116 ms, 在所有 JavaScript 提交中击败了56.72%的用户
    //  内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了29.55%的用户

    //  一开始思路就是想着，这不就是按ascii去排序字符串么，然后就顺着这个思路做了，结果-0-.。。嘻嘻嘻、、全是坑mmp
    //  前后折腾差不多一两个小时，讲道理，全是还好有错误用例，慢慢去改。。感觉现在还是有bug只是没测出来而已。。
    //  回头再想一个通用的。

    if (nums.join('').replace(/0/g, '') === '') return '0'
     
    let reSort = false
 
    const sortFn = (a, b) => {
         return (
             ('' + a) > ('' + b)
             ? 1
             : -1
         )
     }
 
     nums.sort(sortFn)
     
     for (let i = 0; i < nums.length - 1; i++) {
         if (nums[i + 1] === nums[i] && nums[i] !== 0) {
             nums[i + 1] = parseInt('' + nums[i] + nums[i])
             nums.splice(i, 1)
             i--
             reSort = true
         }
     }
 
     reSort && nums.sort(sortFn)
 
     for(let i = 0; i < nums.length - 1; i++) {
         let reg = new RegExp(nums[i], 'g'),
             numNextStr = '' + nums[i + 1],
             regResult = ('' + nums[i + 1]).replace(reg, ''),
             numStr = '' + nums[i]
         
         if (
             (numNextStr[0] === numStr[0])
             && 
             (regResult < numStr && (+(numStr + numNextStr) > +(numNextStr + numStr)))
         ) {
             let tmp = nums[i + 1]
             nums[i + 1] = nums[i]
             nums[i] = tmp
         }
     }
 
 
     return nums.reverse().join('')
 };

let arr =  [3,30,34,5,9]
arr = [100, 1000, 1]
arr = [121, 12]
// arr = [3, 31, 32, 30]
// arr = [10, 2]
// arr = [128, 12]
// arr = [0, 0, 0, 1]
// arr = [5,54,52,67,68,5,52,17,93,53]
// arr = [1, 2, 2, 1]
// arr = [66,8,33,1,72,93,51,88,59,86,66,39,71,82,95,77,44,75,91,4,52,28,20,73,74,91,87,82,94,12,69,13,22,18,45,68,97,65,4,86,44,32,36,96,88,11,21,8,14,4,67,40,57,90,84,27,42,9,39,14,11,79,68,49,1,51,91,56,35,10,22,99,23,8,76,32,46,40,37,43,89,83,91,40,94,43,62,74,8,42,99,7,34,67,39,55,22,87,73,91]
// arr = [9051,5526,2264,5041,1630,5906,6787,8382,4662,4532,6804,4710,4542,2116,7219,8701,8308,957,8775,4822,396,8995,8597,2304,8902,830,8591,5828,9642,7100,3976,5565,5490,1613,5731,8052,8985,2623,6325,3723,5224,8274,4787,6310,3393,78,3288,7584,7440,5752,351,4555,7265,9959,3866,9854,2709,5817,7272,43,1014,7527,3946,4289,1272,5213,710,1603,2436,8823,5228,2581,771,3700,2109,5638,3402,3910,871,5441,6861,9556,1089,4088,2788,9632,6822,6145,5137,236,683,2869,9525,8161,8374,2439,6028,7813,6406,7519]
arr = [8308, 830]
console.log(largestNumber(arr))