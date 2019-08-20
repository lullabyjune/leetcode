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
var isPalindrome = function(head) {
  //  纯暴力解0-0

  let nodes = [];

  while (head) {
    nodes.push(head.val);
    head = head.next;
  }

  return nodes.join("") === nodes.reverse().join("");

  //  看题解的，快慢指针，然后反转链表0-0，大概思路是一开始就想到了的，就是咋说呢，没想到用快慢指针去找中点QAQ
  //  执行用时 :84 ms, 在所有 JavaScript 提交中击败了90.26%的用户
  //  内存消耗 :39.2 MB, 在所有 JavaScript 提交中击败了67.12%的用户

  // if (!head || !head.next) return true;

  // let slow = head;
  // let fast = head.next;
  // let pre = null;
  // let prePre = null;

  // while (fast && fast.next) {
  //   pre = slow;

  //   slow = slow.next;
  //   fast = fast.next.next;

  //   pre.next = prePre;
  //   prePre = pre;
  // }

  // let p2 = slow.next;

  // slow.next = pre;

  // let p1 = fast === null ? slow.next : slow;

  // while (p1) {
  //   if (p1.val !== p2.val) return false;

  //   p1 = p1.next;
  //   p2 = p2.next;
  // }

  // return true;
};
