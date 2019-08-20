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
var reverseList = function(head) {
  //  递归

  //  执行用时 :64 ms, 在所有 JavaScript 提交中击败了99.37%的用户
  //  内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了26.73%的用户

  const reverse = (head, preNode) => {
    if (!head) return preNode;

    let next = head.next;

    head.next = preNode;

    return reverse(next, head);
  };

  return reverse(head, null);

  //  循环

  //  执行用时 :76 ms, 在所有 JavaScript 提交中击败了93.83%的用户
  //  内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了64.62%的用户

  // if (!head) return null;

  // let preNode = null;

  // while (true) {
  //   let next = head.next;

  //   head.next = preNode;
  //   preNode = head;

  //   if (!next) break;

  //   head = next;
  // }

  // return head;
};
