/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了99.71%的用户
  //  内存消耗 :37.8 MB, 在所有 JavaScript 提交中击败了31.92%的用户

  //  一开始还没太想到，后来大概扫了一眼题解就知道了
  //  思路倒是都一样的，二分，主要是一开始没想到怎么递归完了把结果返回出去0-0

  const rebuildBST = (arr) => {
      let left = 0,
          right = arr.length,
          mid = left + Math.floor((right - left) / 2)
      
      if (left >= right) {
          return null
      }
      
      
      let root = new TreeNode(arr[mid])
      
      root.left = rebuildBST(arr.slice(left, mid))
      root.right = rebuildBST(arr.slice(mid + 1, right))
      
      return root
  }
  
  return rebuildBST(nums)
};