/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  s = s.split("");

  while (true) {
    let deleteIndex = [];

    for (let i = 0, length = s.length; i < length; i++) {
      if (s[i] === "*") continue;

      if (s[i] === s[i + 1]) {
        let count = 2;
        for (let j = i + 2; j < length && count < k; j++) {
          if (s[j] === "*") continue;
          if (s[j] !== s[i]) break;

          count++;
        }

        if (count === k) {
          deleteIndex.push(i);
        }

        i += count - 2;
      }
    }

    if (deleteIndex.length === 0) break;

    for (let index of deleteIndex) {
      for (let i = 0, count = 0; count < k; i++) {
        if (s[index + i] === "*") continue;
        s[index + i] = "*";
        count++;
      }
    }

    s = s
      .join("")
      .replace(/\*/g, "")
      .split("");
  }

  return s.join("").replace(/\*/g, "");
};

let str = "deeedbbcccbdaa",
  k = 3;

str = "pbbcggttciiippooaais";
k = 2;

console.info(removeDuplicates(str, k));
