/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  //  快慢指针，只不过在循环体里面判断了一下fast会不会走到Null,因为如果没有环的话，必然会fast先走到头，如果有环的话，就必然会相遇。

  //  执行用时 :88 ms, 在所有 JavaScript 提交中击败了92.27%的用户
  //  内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了83.38%的用户

  if (!head) return false;

  let slow = head,
    fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next || !fast.next.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
