/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  //  执行用时 :100 ms, 在所有 JavaScript 提交中击败了91.91%的用户
  //  内存消耗 :37.5 MB, 在所有 JavaScript 提交中击败了24.79%的用户

  if (!head) return null;

  let p = head;
  let preNode = null;

  while (p) {
    if (p.val === val) {
      if (preNode) {
        preNode.next = p.next;
      } else {
        head = head.next;
      }
    } else {
      preNode = p;
    }

    p = p.next;
  }

  return head;
};
