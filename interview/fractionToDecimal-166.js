/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  //  感觉这就是纯编码题0-0.。。没什么太多的技巧？？

  //  执行用时 :64 ms, 在所有 JavaScript 提交中击败了91.18%的用户
  //  内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了8.33%的用户

  if (denominator === 0) return "NaN";
  if (numerator === 0) return "0";

  let remainderQuotientSet = new Set();
  let result = "";
  let isCircle = false;
  let circleItem = [];
  let circleStart = false;
  let integer = 0;

  if (
    (numerator > 0 && denominator < 0) ||
    (numerator < 0 && denominator > 0)
  ) {
    result += "-";
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  integer = Math.floor(numerator / denominator);

  let remainder = numerator % denominator;

  if (remainder === 0) {
    return result + integer;
  }

  result += integer + ".";

  while (remainder) {
    remainder *= 10;

    integer = Math.floor(remainder / denominator);
    remainder = remainder % denominator;

    let setKey = `${remainder},${integer}`;

    if (remainderQuotientSet.has(setKey)) {
      isCircle = true;
      break;
    }

    remainderQuotientSet.add(setKey);
  }

  if (!isCircle) {
    for (let item of remainderQuotientSet) {
      let [key, value] = item.split(",");
      result += value;
    }

    return result;
  }

  let setKey = `${remainder},${integer}`;

  for (let item of remainderQuotientSet) {
    let [key, value] = item.split(",");

    if (!circleStart && setKey !== item) {
      result += value;
      continue;
    }

    if (setKey === item) {
      circleStart = true;
    }

    circleItem.push(value);
  }

  return result + `(${circleItem.join("")})`;
};
