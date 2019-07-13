/**
 * @param {number} n
 * @return {number}
 */

//  BFS
//  今天刷一天的栈和队列.jpg
var numSquares = function(n) {
    //  一开始用的Array去保存那个nextQuene，执行300ms，感觉有重复，然后用了set0-0，果然降了很多
    //  执行用时 :148 ms, 在所有 JavaScript 提交中击败了85.00%的用户
    //  内存消耗 :38.8 MB, 在所有 JavaScript 提交中击败了41.46%的用户

    let count = 0,
        nextQuene = [n]
    
    while (nextQuene.length) {
        count++
        
        let quene = nextQuene.slice()
        
        nextQuene = []
        
        while (quene.length) {
            let deQueneItem = quene.shift(),
                max = Math.floor(Math.sqrt(deQueneItem))

            for (let i = max; i > 0; i--) {
                let nextValue = deQueneItem - i * i
                
                if (nextValue === 0)    return count
                
                nextQuene.push(nextValue)
            }
        }
    }
};