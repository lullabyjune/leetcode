/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let sortedG = g.sort((a, b) => a - b);
  let sortedS = s.sort((a, b) => a - b);

  let index = 0;
  let maxIndex = s.length;
  let result = 0;

  for (let item of sortedG) {
    if (index >= maxIndex) break;

    if (item <= sortedS[index++]) {
      result++;

      continue;
    }

    while (index < maxIndex) {
      if (item <= sortedS[index++]) {
        result++;
        break;
      }
    }
  }

  return result;
};
