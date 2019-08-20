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
var addTwoNumbers = function(l1, l2) {
    //  执行用时 :200 ms, 在所有 JavaScript 提交中击败了64.86%的用户
    //  内存消耗 :40.5 MB, 在所有 JavaScript 提交中击败了7.91%的用户
    //  不用函数式的话其实会好很多，但是很喜欢这种啊-w-

    let add2next = 0,
        retNode = new ListNode('null'),
        retHead = retNode
    
    const calculateNode = (...arg) => {
        return arg.reduce((total, cur) => {
            return total + cur.val
        }, 0)
    }
    
    const travelNodeAndCalculate = (...nodes) => {
        let result = calculateNode(...nodes) + add2next
        
        add2next = 0
        
        if (result >= 10) {
            add2next = 1
            result %= 10
        }
        
        retHead.next = new ListNode(result)
        retHead = retHead.next
        
        return nodes.map(node => node.next)
    }
    
    while (l1 && l2)    [l1, l2] = travelNodeAndCalculate(l1, l2)
    
    while (l1)  [l1] = travelNodeAndCalculate(l1)
    
    while (l2)  [l2] = travelNodeAndCalculate(l2)
    
    if (add2next)   retHead.next = new ListNode(add2next)
    
    return retNode.next
};