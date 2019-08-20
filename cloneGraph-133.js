/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    //  执行用时 :124 ms, 在所有 JavaScript 提交中击败了100.00%的用户
    //  内存消耗 :44.6 MB, 在所有 JavaScript 提交中击败了9.52%的用户
    
    let map = new Map()
    
    const dfs = (node) => {
        if (!map.has(node)) {
            let copy = new Node(node.val, [])
            map.set(node, copy)
            
            for (let neighbor of node.neighbors) {
                copy.neighbors.push(dfs(neighbor))
            }
        }
        
        return map.get(node)
    }
    
    return dfs(node)
};