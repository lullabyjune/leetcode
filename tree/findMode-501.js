/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  //  执行用时 :104 ms, 在所有 JavaScript 提交中击败了78.57%的用户
  //  内存消耗 :40.8 MB, 在所有 JavaScript 提交中击败了61.54%的用户

  //  一开始还没太注意到二叉搜索树的中序遍历就是一个递增数组0-0.
  //  用了额外空间来存储结果集，-0-不用额外空间的。。没想到
  if (!root)  return []
  
  let results = new Set(),
      maxTimes = 0,
      pre = new TreeNode(null),
      currentTimes = 1
  
  const inOrder = (root) => {
      if (!root)  return
      
      inOrder(root.left, currentTimes)
      
      if (pre) {
          currentTimes = root.val === pre.val ? currentTimes + 1 : 1
      }
      
      if (currentTimes === maxTimes) {
          results.add(root.val)
      } else if (currentTimes > maxTimes) {
          results.clear()
          results.add(root.val)
          maxTimes = currentTimes
      }
      
      pre = root
      
      inOrder(root.right)
  }
  
  inOrder(root)
  
  return Array.from(results)
};