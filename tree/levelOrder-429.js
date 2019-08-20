/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  //  执行用时 :900 ms, 在所有 JavaScript 提交中击败了94.01%的用户
  //  内存消耗 :77.2 MB, 在所有 JavaScript 提交中击败了86.84%的用户


  //  就是很好奇这用例是啥。。居然900ms。。
  let queue = [],
      results = []
  
  queue.push([root])
  
  while (queue.length) {
      let nextQueue = [],
          nodes = queue.shift(),
          currentLevel = []
      
      
      while (nodes.length) {
          let node = nodes.shift()
          
          if (!node)  continue
          
          currentLevel.push(node.val)
          
          if (node.children) {
              nextQueue = nextQueue.concat(node.children)
          }
      }
      
      if (currentLevel.length) {
          results.push(currentLevel)
      }
      
      if (nextQueue.length) {
          queue.push(nextQueue)
      }
      
  }
  
  return results
};