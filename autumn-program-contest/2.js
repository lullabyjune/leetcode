/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
  const solution = (father, child) => {
    // console.info(father, JSON.stringify(child));

    if (Array.isArray(child)) {
      return [child[1], father * child[1] + child[0]];
    }

    return [father, child];
  };

  let next;

  for (let length = cont.length, i = length - 1; i >= 0; i--) {
    if (i === length - 1) {
      next = solution(1, cont[i]);
    } else {
      next = solution(cont[i], next);
    }
  }

  console.info(next.reverse());
};

let arr = [3, 3, 0, 3];

// arr = [0, 0, 3];

fraction(arr);
