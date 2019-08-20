/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    //执行用时 :204 ms, 在所有 JavaScript 提交中击败了100.00%的用户
    //内存消耗 :42.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户

    //  本来不想记录tasks的- -。
    //  直接跑，但是有几个用例的那个顺序有点蛋疼，没办法又只好记录了
    //  虽然说记录tasks才是逻辑严密的--
    
    let count = 0,
        max = 0,
        length = difficulty.length,
        start = 0,
        tasks = []
    
    difficulty.forEach((task, index) => {
        tasks.push({
            difficulty: task,
            profit: profit[index]
        })
    })
    
    worker.sort((x, y) => x - y)
    
    tasks.sort((x, y) => {
        if (x.difficulty !== y.difficulty) {
            return x.difficulty - y.difficulty
        }

        return y.profit - x.profit
    })
    
    const getFitTask = (index, worker) => {
        let i = index
        
        while (i < length) {
            if (tasks[i].difficulty > worker)  break

            max = Math.max(tasks[i++].profit, max)
        }
        
        return i
    }
    
    worker.forEach(el => {
        start = getFitTask(start, el)
        count += max
    })
    
    
    return count
};