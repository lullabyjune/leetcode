/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  //  执行用时 :80 ms, 在所有 JavaScript 提交中击败了85.71%的用户
  //  内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了32.00%的用户

  //  递归的时候如果传入数组，因为每次都要slice，所以内存比较蛋疼，但是时间还ok
  //  如果传入字符串，内存ok，但是时间又比数组慢。妈耶

  let results = []
  
  const dfs = (root, pathArray) => {
      if (!root) return
      
      pathArray.push(root.val)
      
      if (!root.left && !root.right && pathArray) {
          results.push(pathArray.join('->'))
          
          return
      }
      
      dfs(root.left, pathArray.slice())
      dfs(root.right, pathArray.slice())
  }
  
  dfs(root, [])
  
  return  results
};