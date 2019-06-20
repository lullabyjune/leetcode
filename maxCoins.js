/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let countArr = {}
    
    const stabBalloon = (arr, index, nowCount, trace) => {
        if (arr.length === 1) {
            let result = nowCount + arr[0]
            if (!countArr[result]) {
                countArr[result] = trace
            }
            // !countArr.includes(result) ? countArr.push(result) : ''
            return
        }
        
        nowCount += (arr[index - 1] || 1) * arr[index] * (arr[index + 1] || 1)
        trace.push(arr.splice(index, 1)[0])

        for (let i = 0, length = arr.length; i < length; i++) {
            stabBalloon(arr.slice(), i, nowCount, trace.slice())
        }
    }
    
    for (let i = 0, length = nums.length; i < length; i++) {
        stabBalloon(nums.slice(), i, 0, [])
    }
    
    // console.log(countArr)
    // countArr.filter(el => el.val === 300)
    console.log(countArr[300])

    // return Math.max(...countArr)
};

let arr = [3, 1, 5, 8, 1, 4, 2]

console.log(maxCoins(arr))