/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  //  - -对不起，思路和题解完全相反
  //  我想的是去找能变化成'X'的节点，但是题解找的是不能变化的节点
  //  然后对于所有和边缘相连的‘O’都用占位符代替。。。最后扫描一遍就过了。。md...

  //  执行用时 :116 ms, 在所有 JavaScript 提交中击败了98.53%的用户
  //  内存消耗 :41.9 MB, 在所有 JavaScript 提交中击败了66.67%的用户

  if (!board || !board.length) return board;

  let rows = board.length;
  let cols = board[0].length;

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] === "X" ||
      board[row][col] === "#"
    ) {
      return;
    }

    board[row][col] = "#";

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let isEdge =
        row === 0 || row === rows - 1 || col === 0 || col === cols - 1;

      if (isEdge && board[row][col] === "O") {
        dfs(row, col);
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === "O") {
        board[row][col] = "X";
      }

      if (board[row][col] === "#") {
        board[row][col] = "O";
      }
    }
  }

  return board;

  //  自己写的。，没跑通，后面超时了，大概跑通90%左右，感觉复杂度太高了，对于那些真的要change的'O'节点，我相当于重复遍历了三次。。
  //  想一次遍历一边弄一边改，但是又不太会写0-0.。
  //  虽然知道这很明显是一个图的题，bfs dfs啥的，但是，-0-，并不会图的遍历。。。

  // let rows = board.length;
  // let cols = board[0] ? board[0].length : 0;
  // let visitedOSet = new Set(); //  set to store coordinate string as 2,1

  // const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  // const edge = [[0, rows], [0, cols]];

  // const BFS = ([row, col]) => {
  //   let queue = [];
  //   let trace = [];
  //   let canChange = true;

  //   queue.push([row, col]);

  //   while (queue.length) {
  //     let node = queue.shift();

  //     if (visitedOSet.has(node.toString())) continue;

  //     visitedOSet.add(node.toString());
  //     trace.push(node);

  //     if (edge[0].includes(node[0]) || edge[1].includes(node[1])) {
  //       canChange = false;
  //     }

  //     for (let [rowAdd, colAdd] of dir) {
  //       let newRow = node[0] + rowAdd;
  //       let newCol = node[1] + colAdd;

  //       if (visitedOSet.has(`${newRow},${newCol}`)) continue;

  //       if (!board[newRow] || !board[newRow][newCol]) {
  //         canChange = false;
  //         continue;
  //       }

  //       if (board[newRow][newCol] === "O") {
  //         queue.push([newRow, newCol]);
  //       }
  //     }
  //   }

  //   if (canChange) {
  //     for (let [row, col] of trace) {
  //       board[row][col] = "X";
  //     }
  //   }
  // };

  // for (let row = 0; row < rows; row++) {
  //   for (let col = 0; col < cols; col++) {
  //     if (!visitedOSet.has(`${row},${col}`) && board[row][col] === "O") {
  //       BFS([row, col]);
  //     }
  //   }
  // }

  // return board;
};
// console.info(JSON.stringify(solve(board)));
solve(board);
