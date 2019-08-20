/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    //执行用时 :88 ms, 在所有 JavaScript 提交中击败了95.66%的用户
    //内存消耗 :36 MB, 在所有 JavaScript 提交中击败了10.87%的用户
    
    //  所以果然封装函数带来的参数传递是会影响效率的.jpg

    let resList = new ListNode(null),
        resHead = resList
    
    while (l1 && l2) {
        if (l1.val > l2.val) {
            resList.next = new ListNode(l2.val)
            l2 = l2.next
        } else {
            resList.next = new ListNode(l1.val)
            l1 = l1.next
        }
        resList = resList.next
    }
    
    while (l1) {
        resList.next = new ListNode(l1.val)
        l1 = l1.next
        resList = resList.next
    }
    
    while (l2) {
        resList.next = new ListNode(l2.val)
        l2 = l2.next
        resList = resList.next
    }
    
    return resHead.next

//  这个是看最后最优解写的。和我自己写的区别主要就是没有频繁创建对象，只是拿了一个指针
//  并且最后剩下单独一个的时候也没有复制，也是直接指针指过去
//  -0-整个都是浅拷贝
//  执行用时 :84 ms, 在所有 JavaScript 提交中击败了97.70%的用户
//  内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了14.89%的用户
//  话说我就一直很纳闷，一样的代码为啥我比别人多了20多ms。
//     let resList = new ListNode(null),
//     resHead = resList

// while (l1 && l2) {
//     if (l1.val > l2.val) {
//         resList.next = l2
//         l2 = l2.next
//     } else {
//         resList.next = l1
//         l1 = l1.next
//     }
//     resList = resList.next
// }

// resList.next = l1 || l2

// return resHead.next
    

//  封装函数-0-
//  大概92 - 96 ms左右
//     let resList = new ListNode(null),
//         resHead = resList
    
//     const linkList = (fromNode) => {
//         resList.next = new ListNode(fromNode.val)
//         resList = resList.next
        
//         return fromNode.next
//     }
    
//     while (l1 && l2) {
//         if (l1.val > l2.val) {
//             l2 = linkList(l2)
//         } else {
//             l1 = linkList(l1)
//         }
//     }
    
//     while (l1)  l1 = linkList(l1)
    
//     while (l2)  l2 = linkList(l2)
    
//     return resHead.next
    
};