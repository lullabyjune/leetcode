/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count = 0,
    current = [0, 0]; //  refers to L's number && R's number

  for (let i = 0, length = s.length; i < length; i++) {
    s[i] === "L" ? current[0]++ : current[1]++;

    if (current[0] === current[1]) {
      current = [0, 0];
      count++;
    }
  }

  return count || 1;
};
