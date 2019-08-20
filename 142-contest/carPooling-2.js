/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let nowCount = 0,
        downArr = []
    
    const sortFn = (a, b) => {
        if (a[1] === b[1])  return a[2] - b[2]
        
        return a[1] - b[1]
    }
    
    trips.sort(sortFn)
    
    console.log(trips)
    
    nowCount = trips[0][0]
    downArr = [[trips[0][0], trips[0][2]]]
    
    for (let i = 1, length = trips.length; i < length; i++) {
        for (let j = 0; j < downArr.length;) {
            if (trips[i][1] >= downArr[j][1]) {
                nowCount -= downArr[j][0]
                downArr.splice(j, 1)
                continue
            }
            j++
        }
        
        nowCount += trips[i][0]
        downArr.push([trips[i][0], trips[i][2]])
        
        if (nowCount > capacity)    return false
    }
    
    return true
};

let arr = [[9,3,4],[9,1,7],[4,2,4],[7,4,5]],
    count = 23

console.log(carPooling(arr, count))