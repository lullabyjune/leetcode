/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了93.83%的用户
  //  内存消耗 :37.2 MB, 在所有 JavaScript 提交中击败了51.85%的用户

  if (!root)  return 0
  
  let queue = [],
      depth = 0
  
  queue.push([root])
  
  while (queue.length) {
      let nodes = queue.shift(),
          nextLevel = []
      
      if (nodes.length) {
          depth++
          
          while (nodes.length) {
              let node = nodes.shift()
              
              if (!node)  continue
              
              if (!node.left && !node.right)  return depth
              
              nextLevel.push(node.left, node.right)
          }
      }
      
      if (nextLevel.length)  queue.push(nextLevel)
  }
};