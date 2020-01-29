/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
  a = parseInt(a).toString(2);
  b = parseInt(b).toString(2);
  c = parseInt(c).toString(2);

  let index = 0;
  let count = 0;
  let max = Math.max(a.length, b.length, c.length);

  if (a.length < max) {
    a = "0".repeat(max - a.length) + a;
  }

  if (b.length < max) {
    b = "0".repeat(max - b.length) + b;
  }

  if (c.length < max) {
    c = "0".repeat(max - c.length) + c;
  }

  while (index < max) {
    let or = a[index] | b[index];

    if (or == c[index]) {
      index++;
      continue;
    }

    if (or === 0 && c[index] == 1) {
      index++;
      count++;
      continue;
    }

    if (or === 1 && c[index] == 0) {
      if (a[index] == 1 && b[index] == 1) {
        count += 2;
      } else {
        count++;
      }

      index++;
    }
  }

  return count;
};

console.info(minFlips(1, 2, 3));
