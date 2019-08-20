/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = new Set()
    
    const getAllResults = (str, nowArr) => {
        if (nowArr.length === 4) {
            str === '' && res.add(nowArr.join())
            return
        }
        for (let i = 1; i < 4; i++) {
            let tmpStr = str.slice(0, i)
            if (tmpStr !== '' &&
                tmpStr <= 255 && 
                !(tmpStr[0] == 0 && tmpStr.length > 1)) {
                getAllResults(str.slice(i), nowArr.concat([tmpStr]))
            }
        }
    }
    
    getAllResults(s, [])
   
    
    return Array.from(res)
};

let addr = "255123159147"

console.log(JSON.stringify(restoreIpAddresses(addr)))