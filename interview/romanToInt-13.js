/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  //  执行用时 :240 ms, 在所有 JavaScript 提交中击败了70.01%的用户
  //  内存消耗 :39.8 MB, 在所有 JavaScript 提交中击败了83.14%的用户

  //  我其实不是很懂这个又没啥复杂逻辑，为啥就240ms了。。。
  //  而且- -。这代码是真的丑，anyway，反正我懒得改了-0-.

  if (!s) return 0;

  let result = 0;

  for (let i = 0, length = s.length; i < length; i++) {
    let chart = s[i];

    if (chart === "I") {
      if (s[i + 1] && s[i + 1] === "V") {
        result += 4;
        i++;
        continue;
      }

      if (s[i + 1] && s[i + 1] === "X") {
        result += 9;
        i++;
        continue;
      }

      result += 1;
    }

    if (chart === "X") {
      if (s[i + 1] && s[i + 1] === "L") {
        result += 40;
        i++;
        continue;
      }

      if (s[i + 1] && s[i + 1] === "C") {
        result += 90;
        i++;
        continue;
      }

      result += 10;
    }

    if (chart === "C") {
      if (s[i + 1] && s[i + 1] === "D") {
        result += 400;
        i++;
        continue;
      }

      if (s[i + 1] && s[i + 1] === "M") {
        result += 900;
        i++;
        continue;
      }

      result += 100;
    }

    switch (chart) {
      case "V":
        result += 5;
        break;
      case "L":
        result += 50;
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;
    }
  }

  return result;
};
