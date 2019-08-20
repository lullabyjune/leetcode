/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    //  还是看评论做的。BFS图遍历
    //  QAQ果然我的数据结构还是捞比。。这题我唯一想法就是回溯。但是写不出来那个跳出条件QAQ
    //  其实和我之前想的回溯，只是没想到把每次回溯的当前节点加到deadends里面，所以想着会无脑循环无法跳出。
    //  -0-太年轻.jpg

    //  执行用时 :248 ms, 在所有 JavaScript 提交中击败了98.75%的用户
    //  内存消耗 :51.5 MB, 在所有 JavaScript 提交中击败了31.82%的用户

    const deadendsSet = new Set(deadends),
          addArr = [-1, 1]
    
    if (deadendsSet.has('0000'))    return -1
    
    let queue = [['0000', 0]]
    
    const getNextNumStr = (num, add) => {
        if (num === '0' && add === -1)  return '9'
        
        return (+num + add) % 10 + ''
    }
    
    while (queue.length) {
        let [node, steps] = queue.shift()
        
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 2; j++) {
                let cur = node.slice(0, i) + getNextNumStr(node[i], addArr[j]) + node.slice(i + 1)
                
                if (cur === target) return steps + 1
                
                if (!deadendsSet.has(cur)) {
                    queue.push([cur, steps + 1])
                    deadendsSet.add(cur)
                }
            }
        }
    }
    
    return -1
};