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
var sortList = function(head) {
  //  执行用时 :128 ms, 在所有 JavaScript 提交中击败了90.77%的用户
  //  内存消耗 :40 MB, 在所有 JavaScript 提交中击败了83.82%的用户

  if (!head || !head.next) return head;

  let fast = head.next;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let tmp = slow.next;

  slow.next = null;

  let left = sortList(head);
  let right = sortList(tmp);
  let tmpHead = new ListNode(0);
  let result = tmpHead;

  while (left && right) {
    if (left.val < right.val) {
      tmpHead.next = left;
      left = left.next;
    } else {
      tmpHead.next = right;
      right = right.next;
    }

    tmpHead = tmpHead.next;
  }

  tmpHead.next = left ? left : right;

  return result.next;
};
