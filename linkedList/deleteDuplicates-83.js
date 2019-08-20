/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  //  正儿八经的，有时候，用他给定的这种函数做递归，和自己写一个递归函数，完全是两种难度。。。
  //  0-0，就是因为参数不能自定义，并且不能用外部变量，fuck

  //  执行用时 :92 ms, 在所有 JavaScript 提交中击败了87.44%的用户
  //  内存消耗 :35.4 MB, 在所有 JavaScript 提交中击败了87.58%的用户

  if (!head) return null;

  if (head.next) {
    if (head.next.val === head.val) {
      head = deleteDuplicates(head.next);
    } else {
      head.next = deleteDuplicates(head.next);
    }
  }

  return head;
};
