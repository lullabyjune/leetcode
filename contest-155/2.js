/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
  let aQueue = a,
    bQueue = b,
    cQueue = c,
    currentIndex = 1,
    currentNumber;

  while (currentIndex <= n) {
    let min = Math.min(aQueue, bQueue, cQueue);

    switch (min) {
      case aQueue:
        aQueue += a;

        break;
      case bQueue:
        bQueue += b;
        break;
      case cQueue:
        cQueue += c;
        break;
    }

    currentIndex++;
    currentNumber = min;
  }

  return currentNumber;
};

// let n = 3,
//   a = 2,
//   b = 3,
//   c = 5;

// let n = 5,
//   a = 2,
//   b = 11,
//   c = 13;

let n = 1000000000,
  a = 2,
  b = 217983653,
  c = 336916467;

console.info(nthUglyNumber(n, a, b, c));
