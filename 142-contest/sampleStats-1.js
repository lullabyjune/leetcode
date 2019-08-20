/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
    let sum = 0,
        max = 0,
        min = 0,
        middle = 0,
        mode = 0,
        modeCount = 0,
        avg = 0,
        total = 0
    
    count.forEach((el, index) => {
        sum += el * index
        if (el > modeCount) {
            mode = index
            modeCount = el
        }
        total += el
    })
    
    avg = sum / total
    
    
    for (let i = 0; i < 256; i++) {
        if (count[i] !== 0) {
            min = i
            break
        }
    }
    
    for (let i = 255; i >= 0; i--) {
        if (count[i] !== 0) {
            max = i
            break
        }
    }
    
    if (total % 2 === 0) {
        let tmp = 0, middleIndex = total / 2
        for (let i = 0; i < 256; i++) {
            tmp += count[i]
            
            if (tmp >= middleIndex) {
                if (tmp === middleIndex + 1) {
                    if (count[i] === 1) {
                        middle = (i + i - 1) / 2
                    } else {
                        middle = i
                    }
                } else if (tmp === middleIndex) {
                    middle = (i + i + 1) / 2
                } else {
                    middle = i
                }
                
                break
            }
        }
    } else {
        let tmp = 0, middleIndex = (total + 1) / 2
        
        for (let i = 0; i < 256; i++) {
            tmp += count[i]
            
            if (tmp >= middleIndex) {
                middle = i
                
                break
            }
        }
    }
    
    
    return [min, max, avg, middle, mode]
};