/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  //  和I差不多的做法，因为上次看了题解，这次就是自己写了QAQ
  //  本身求的就是一个拓扑排序嘛。所以也没用DFS啥的去求了，直接在之前拓扑排序的基础上加了一个result去存储序列节点就好了

  //  执行用时 :200 ms, 在所有 JavaScript 提交中击败了21.62%的用户
  //  内存消耗 :41.4 MB, 在所有 JavaScript 提交中击败了42.86%的用户

  let result = [];
  let queue = [];
  let indegrees = new Array(numCourses).fill(0);

  for (let [inNode] of prerequisites) {
    indegrees[inNode]++;
  }

  for (let [index, value] of indegrees.entries()) {
    if (value === 0) queue.push(index);
  }

  while (queue.length) {
    let preNode = queue.shift();

    result.push(preNode);

    numCourses--;

    for (let [inNode, outNode] of prerequisites) {
      if (outNode !== preNode) continue;

      if (--indegrees[inNode] === 0) queue.push(inNode);
    }
  }

  return numCourses === 0 ? result : [];
};
