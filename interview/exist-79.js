/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  //  算是回溯么(或者DFS？）- -，不得不说这代码写的是真的丑，，虽然逻辑上没毛病。。但是真的丑。。
  //  性能低我觉得主要是在每次递归的时候都做了一次深拷贝- -，但是有没想到怎么避免这样的操作，毕竟需要去修改源数组
  //  如果不做深拷贝的话，在递归失败还原现场的时候就会出问题- -。
  //  当然也可以在外面在做一个array去保存元素是否被使用过，但是我觉得那样很蠢，恩，所以还是倔强的深拷贝了QAQ

  //  执行用时 :284 ms, 在所有 JavaScript 提交中击败了26.58%的用户
  //  内存消耗 :55.6 MB, 在所有 JavaScript 提交中击败了23.53%的用户

  if (!word) return true;

  if (!board.length) return false;

  const travelBoard = (board, word, wordIndex, start) => {
    let copyBoard = [];

    for (let item of board) {
      copyBoard.push(item.slice());
    }

    if (word.length === wordIndex) return true;

    let [row, col] = start;

    let leftFlag = false;
    let rightFlag = false;
    let topFlag = false;
    let downFlag = false;

    if (board[row][col + 1] && board[row][col + 1] === word[wordIndex]) {
      rightFlag = true;
      copyBoard[row][col] = "";
    }

    if (board[row][col - 1] && board[row][col - 1] === word[wordIndex]) {
      leftFlag = true;
      copyBoard[row][col] = "";
    }

    if (
      board[row + 1] &&
      board[row + 1][col] &&
      board[row + 1][col] === word[wordIndex]
    ) {
      topFlag = true;
      copyBoard[row][col] = "";
    }

    if (
      board[row - 1] &&
      board[row - 1][col] &&
      board[row - 1][col] === word[wordIndex]
    ) {
      downFlag = true;
      copyBoard[row][col] = "";
    }

    if (!leftFlag && !rightFlag && !topFlag && !downFlag) {
      return false;
    }

    return (
      (leftFlag &&
        travelBoard(copyBoard, word, wordIndex + 1, [row, col - 1])) ||
      (rightFlag &&
        travelBoard(copyBoard, word, wordIndex + 1, [row, col + 1])) ||
      (topFlag &&
        travelBoard(copyBoard, word, wordIndex + 1, [row + 1, col])) ||
      (downFlag && travelBoard(copyBoard, word, wordIndex + 1, [row - 1, col]))
    );
  };

  for (let i = 0, length = board.length; i < length; i++) {
    let wordIndex = 0;

    for (let [index, item] of board[i].entries()) {
      if (item === word[wordIndex]) {
        if (travelBoard(board, word, 1, [i, index])) return true;
      }
    }
  }

  return false;
};

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];

board = [["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]];

let word = "ABCCED";

word = "ABCB";

word = "SEE";

word = "ABCESEEEFS";

console.info(exist(board, word));
