/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了84.77%的用户
  //  内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了28.43%的用户

  //  row: number[]
  const generateRow = row => {
    if (!row) {
      return [1];
    }

    let result = [1];

    for (let i = 1, length = row.length; i < length; i++) {
      result.push(row[i] + row[i - 1]);
    }

    result.push(1);

    return result;
  };

  let result = [];

  for (let i = 0; i < numRows; i++) {
    result.push(generateRow(result[result.length - 1]));
  }

  return result;
};
