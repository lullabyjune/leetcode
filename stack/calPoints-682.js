/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  //  执行用时 :56 ms, 在所有 JavaScript 提交中击败了100.00%的用户
  //  内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了84.81%的用户
  
  let stack = []
  
  while (ops.length) {
      let operator = ops.shift(),
          length = stack.length
      
      if (operator === 'C') {
          stack.pop()
      } else if (operator === 'D') {
          let num = stack[length - 1] || 0
          
          stack.push(num * 2)
      } else if (operator === '+') {
          let num1 = stack[length - 1] || 0,
              num2 = stack[length - 2] || 0
          
          stack.push(num1 + num2)
      } else {
          stack.push(+operator)
      }
  }
  
  return stack.reduce((total, cur) => total + cur, 0)
};