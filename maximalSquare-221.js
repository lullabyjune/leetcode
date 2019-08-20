/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    //  执行用时 :112 ms, 在所有 JavaScript 提交中击败了95.18%的用户
    //  内存消耗 :39.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户

    const rows = matrix.length,
          cols = matrix[0] ? matrix[0].length : []
    
    let max = 0
    
    const findSquar = (i, j) => {
        let border = 1
        
        //  一开始这里写的是while，写的一模一样，但是在while里面j永远是1
        //  懵了都，看半天都没任何关于j的赋值0-0.然后换成了for，我就只能当有什么不可见编码吧。。

        for (let right = j + border, bottom = i + border; bottom < rows && right < cols; border++) {
            for (let row = i; row <= bottom; row++) {
                if (matrix[row][right] == 0)    return border
            }

            for (let col = j; col <= right; col++) {
                if (matrix[bottom][col] == 0)   return border
            }

            right++
            bottom++
        }

        return border
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 0) continue
            
            max = Math.max(findSquar(i, j), max)
        }
    }
    
    return max * max
};

let arr = [
    ["1","1","1","1","1"],
    ["1","1","1","1","1"],
    ["1","1","1","1","1"],
    ["1","1","1","1","1"]
]

console.log(maximalSquare(arr))