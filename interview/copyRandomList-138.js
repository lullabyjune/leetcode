/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  //  一次遍历，中间那一块有点蠢，可以单独抽出去，但是懒。。恩.
  //  plus版

  //  执行用时 :944 ms, 在所有 JavaScript 提交中击败了90.83%的用户
  //  内存消耗 :95.4 MB, 在所有 JavaScript 提交中击败了70.00%的用户

  if (!head) return head;

  let retNode = new Node(null);
  let useNode = retNode;
  let copyNodeOriginMap = new Map(); //  map refer to origin node -> copy node (while copy node has not random node)

  while (head) {
    let random = head.random;

    let copyNode, copyRandomNode;

    if (copyNodeOriginMap.has(head)) {
      copyNode = copyNodeOriginMap.get(head);
    } else {
      copyNode = new Node(head.val);
      copyNodeOriginMap.set(head, copyNode);
    }

    if (random === null) {
      copyRandomNode = null;
    } else {
      if (copyNodeOriginMap.has(random)) {
        copyRandomNode = copyNodeOriginMap.get(random);
      } else {
        copyRandomNode = new Node(random.val);
        copyNodeOriginMap.set(random, copyRandomNode);
      }
    }

    useNode.next = copyNode;

    head = head.next;
    useNode = useNode.next;

    useNode.random = copyRandomNode;
  }

  return retNode.next;

  //  没想到什么太好的方法能一次遍历就弄完的
  //  因为在比如第一个节点的random指向最后一个节点的话，就得用占位符，然后在每次生成节点的时候都需要去检测当前节点是否是已经被之前占用过的，然后是的话再返回去修改
  //  就是这一块处理起来感觉会比较脏，因为会存一些乱七八糟的，虽然也是一个MAP吧，但是总觉得会多一些东西，而且逻辑上也比较绕，虽然可以少一次遍历
  //  于是我就这样了 - -，第一次先复制节点，然后存一个 源节点 -> copy节点的Map，此时他们的区别只是random不一样
  //  这样是为了后续在random二次遍历的时候能找到对应的节点去操作0-0.

  //  看题解找到一种解决办法- -。就是在复制random的时候，如果指向的节点还没有被创建，就先创建，然后存map，后续到这个节点的时候，直接从map取出来就行了
  //  这样的话就是一次遍历，而且没有之前提到的比较脏的问题0-0.

  //  执行用时 :948 ms, 在所有 JavaScript 提交中击败了89.91%的用户
  //  内存消耗 :97.4 MB, 在所有 JavaScript 提交中击败了60.00%的用户

  // if (!head) return head;

  // let retNode = new Node(null);
  // let randomHead = head;
  // let useNode = retNode;
  // let randomCopyHead = retNode;
  // let copyNodeOriginMap = new Map(); //  map refer to origin node -> copy node (while copy node has not random node)

  // while (head) {
  //   useNode.next = new Node(head.val);

  //   copyNodeOriginMap.set(head, useNode.next);

  //   head = head.next;
  //   useNode = useNode.next;
  // }

  // randomCopyHead = randomCopyHead.next;

  // while (randomHead) {
  //   let random = randomHead.random;

  //   let randomCopyNode = copyNodeOriginMap.get(random) || null;

  //   randomCopyHead.random = randomCopyNode;

  //   randomHead = randomHead.next;
  //   randomCopyHead = randomCopyHead.next;
  // }

  // return retNode.next;
};
