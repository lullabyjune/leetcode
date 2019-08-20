/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //  100ms 97.89%
    
    let lastStr = '',
        max = 0
    
    for (let i = 0, length = s.length; i < length; i++) {
        let idx = lastStr.indexOf(s[i])
        
        if (idx >= 0) {
            max = Math.max(max, lastStr.length)
            lastStr = lastStr.slice(idx + 1)
        }
        
        lastStr += s[i]
    }
    
    max = Math.max(max, lastStr.length)
    
    return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))