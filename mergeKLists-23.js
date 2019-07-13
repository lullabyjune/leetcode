/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    //  执行用时 :264 ms, 在所有 JavaScript 提交中击败了44.62%的用户
    //  内存消耗 :40.6 MB, 在所有 JavaScript 提交中击败了23.31%的用户
    //  虽然这个成绩不高。但是好歹是我从3k多ms弄到264ms，相当满足0-0

    let mergedList = new ListNode(null),
        head = mergedList,
        nowValue = []
    
    for (let i = 0, length = lists.length; i < length; i++) {
        nowValue[i] = lists[i] ? lists[i].val : Number.MAX_SAFE_INTEGER
    }
    
    while (true) {
        let min = Number.MAX_SAFE_INTEGER,
            minIndex = -1

        nowValue.forEach((num, index) => {
            if (num < min) {
                min = num
                minIndex = index
            }
        })
        
        if (minIndex === -1) break
        
        if (!lists[minIndex].next) {
            nowValue[minIndex] = Number.MAX_SAFE_INTEGER
        } else {
            lists[minIndex] = lists[minIndex].next
            nowValue[minIndex] = lists[minIndex].val
        } 
        
        head.next = new ListNode(min)
        head = head.next
    }
    
    return mergedList.next
};