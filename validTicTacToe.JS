/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  function hadWinner () {
      for (let i = 0, length = board.length; i < length; i++) {
          let res1 = isSame(board[i].split(''))
          let res2 = isSame(board.map(item => item[i]))
          if (res1 || res2) {
              return res1 || res2
          }
      }
      let res1 = isSame([board[0][0], board[1][1], board[2][2]])
      let res2 = isSame([board[0][2], board[1][1], board[2][0]])
      
      return res1 || res2
  }
  
  function isSame (arr) {
      let res = false
      if (new Set(arr).size === 1) {
          res = arr[0] === ' ' ? false : arr[0]
      }
      
      return res
  }
  
  let xNumber = 0
  let oNumber = 0

  board.forEach(el => {
      el.split('').forEach(eachChar => {
          if (eachChar === 'X') {
              xNumber++
          } else if (eachChar === 'O') {
              oNumber++
          }
      })
  })
  
  
  let subNumber = xNumber - oNumber
  
  if (subNumber > 1 || subNumber < 0) {
      return false
  }
  
  let winner = hadWinner()

  if ((subNumber === 0 && winner === 'X') || (subNumber === 1 && winner === 'O')) {
      return false
  } 
  
  return true
};

let arr = ["XXX","   ","OOO"]
// validTicTacToe(arr)
console.log(validTicTacToe(arr))