/**
 * @param {character[][]} grid
 * @return {number}
 */


 // dfs
var numIslands = function(grid) {
    if (!grid || !grid[0])  return 0
    
    let rows = grid.length,
        cols = grid[0].length,
        landNums = 0
    
    const dfs = (grid, r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == '0')   return
        
        grid[r][c] = '0'
        
        dfs(grid, r, c + 1)
        dfs(grid, r, c - 1)
        dfs(grid, r + 1, c)
        dfs(grid, r - 1, c)
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == '1') {
                landNums++
                dfs(grid, row, col)
            }
        }
    }
    
    return landNums
};



/**
 * @param {character[][]} grid
 * @return {number}
 */

 
 // bfs
 var numIslands = function(grid) {
    if (!grid || !grid[0])  return 0
    
    let rows = grid.length,
        cols = grid[0].length,
        landNums = 0
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == '1') {
                landNums++
                
                let quene = []
                quene.push(row * cols + col)
                grid[row][col] = '0'

                while (quene.length) {
                    let id = quene.shift(),
                        r = Math.floor(id / cols),
                        c = id % cols
                    
                    if (r >= 1 && grid[r - 1][c] == '1') {
                        let nextId = (r - 1) * cols + c
                        grid[r - 1][c] = '0'
                        
                        !quene.includes(nextId) && quene.push(nextId)
                    }
                    
                    if (r < rows - 1 && grid[r + 1][c] == '1') {
                        let nextId = (r + 1) * cols + c
                        grid[r + 1][c] = '0'

                        !quene.includes(nextId) && quene.push(nextId)
                    }
                    
                    if (c >= 1 && grid[r][c - 1] == '1') {
                        let nextId = r * cols + c - 1
                        grid[r][c - 1] = '0'
                        
                        !quene.includes(nextId) && quene.push(nextId)
                    }
                    
                    if (c < cols - 1 && grid[r][c + 1] == '1') {
                        let nextId = r * cols + c + 1
                        grid[r][c + 1] = '0'
                        
                        !quene.includes(nextId) && quene.push(nextId)
                    }
                }
            }
        }
    }
    
    return landNums
};