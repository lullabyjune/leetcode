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
var middleNode = function(head) {
  //  刚在上一个题学到的QAQ，用快慢指针来找中点.jpg
  //  链表简单也做完了-0-.剩一个建链表的懒得做-0-，嘻嘻嘻

  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了81.42%的用户
  //  内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了50.79%的用户

  if (!head.next) return head;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return fast === null ? slow : slow.next;
};
