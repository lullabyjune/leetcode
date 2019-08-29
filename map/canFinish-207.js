/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  //  说实话我不是很懂为什么按照第一种写法直接丢new Array进去填充二维数组的话，每个数组之间是引用关系。。。md？？
  //  dfs深度遍历
  //  一开始也有想到这种做法，但是对于是每个节点是自己这次dfs的时候遍历到还是说因为其他节点而遍历到没有想到怎么处理
  //  这个就是加了一个 1 -1 0的标志位0-0

  //  执行用时 :276 ms, 在所有 JavaScript 提交中击败了21.82%的用户
  //  内存消耗 :129.5 MB, 在所有 JavaScript 提交中击败了5.55%的用户

  // let adjacency = new Array(numCourses).fill(new Array(numCourses).fill(0));
  // let flags = new Array(numCourses).fill(0);

  let adjacency = [];
  let flags = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    adjacency.push(new Array(numCourses).fill(0));
  }

  const dfs = i => {
    if (flags[i] === 1) return false;

    if (flags[i] === -1) return true;

    flags[i] = 1;

    for (let j = 0; j < numCourses; j++) {
      if (adjacency[i][j] === 1 && !dfs(j)) return false;
    }

    flags[i] = -1;

    return true;
  };

  for (let [inNode, outNode] of prerequisites) {
    adjacency[outNode][inNode] = 1;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;

  //  题解0-0.。拓扑排序。。。
  //  怎么说呢。。感觉就是。。别人这才叫算法。。我那叫jb
  //  大概意思就是把图的节点做一个排序，当数组一样，节点V出现的条件是节点V的所有前驱节点都已经出现了。-0-
  //  用这个numCourses去记录能有多少个节点最后被queue过了一遍（因为入队条件是前驱节点都过了
  //  所以最后判断numCourses是不是0就知道有没有环了，并且如果不是0的话，numCourses的值就是环里面的节点的数量（但是如果是多个环的话是无法统计分别的每个环的节点的数量的在这里

  //  执行用时 :208 ms, 在所有 JavaScript 提交中击败了29.09%的用户
  //  内存消耗 :42 MB, 在所有 JavaScript 提交中击败了55.56%的用户

  // let indegrees = new Array(numCourses).fill(0);
  // let queue = [];

  // for (let [inNode] of prerequisites) {
  //   indegrees[inNode]++;
  // }

  // for (let [index, node] of indegrees.entries()) {
  //   if (node === 0) queue.push(index);
  // }

  // while (queue.length) {
  //   let preNode = queue.shift();

  //   numCourses--;

  //   for (let [inNode, outNode] of prerequisites) {
  //     if (outNode !== preNode) continue;

  //     if (--indegrees[inNode] === 0) queue.push(inNode);
  //   }
  // }

  // return numCourses === 0;

  //  这个题。emmmm虽然是图的，而且各种意义上来说都是图的遍历，
  //  主要就是判断有没有环。。但是我总觉得我写的这种不是标准的图的解法？？或者压根就和图没关系？
  //  虽然是跑通了。。
  //  加了一个noCircleSet之后少了2000多ms的时间和几十m的内存。。。
  //  果然是有大量的重复遍历啊之前。。。

  //  没noCircleSet之前
  //  执行用时 :3788 ms, 在所有 JavaScript 提交中击败了5.45%的用户
  //  内存消耗 :157.2 MB, 在所有 JavaScript 提交中击败了5.55%的用户

  //  有了之后
  //  执行用时 :992 ms, 在所有 JavaScript 提交中击败了5.45%的用户
  //  内存消耗 :107.4 MB, 在所有 JavaScript 提交中击败了16.67%的用户

  // let nodeLinkedMap = new Map(); //  Map<string, string[]>
  // let traveledSet = new Set(); // Set<string>
  // let noCircleSet = new Set(); //  Set<string>

  // const travelMap = (i, traveledHash) => {
  //   traveledSet.add(i);

  //   let linked = nodeLinkedMap.get(i);

  //   if (!linked) return true;

  //   return linked.reduce((total, cur) => {
  //     if (total === false) return false;

  //     if (traveledHash[cur]) {
  //       return false;
  //     }

  //     let copyTraveledHash = Object.assign({}, traveledHash);

  //     copyTraveledHash[cur] = true;

  //     return (
  //       total &&
  //       (noCircleSet.has(cur) ? true : travelMap(cur, copyTraveledHash))
  //     );
  //   }, true);
  // };

  // for (let [outNode, inNode] of prerequisites) {
  //   let linkedMap = nodeLinkedMap.get(outNode) || [];

  //   linkedMap.push(inNode);

  //   nodeLinkedMap.set(outNode, linkedMap);
  // }

  // for (let i = 0; i < numCourses; i++) {
  //   if (!traveledSet.has(i)) {
  //     if (!travelMap(i, {})) {
  //       return false;
  //     }

  //     noCircleSet.add(i);
  //   }
  // }

  // return true;
};

canFinish(2, [[1, 0]]);
