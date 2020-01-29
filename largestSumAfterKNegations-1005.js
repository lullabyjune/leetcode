/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  A.sort((a, b) => a - b);

  let currentK = 0;
  let sum = 0;
  let length = A.length;
  let splitIndex =
    A[0] >= 0
      ? 0
      : A.findIndex((number, index) => {
          if (index === 0) return false;
          if (index === length - 1) return true;

          return A[index - 1] <= 0 && A[index] >= 0;
        });

  for (let i = splitIndex; i < length; i++) {
    sum += A[i];
  }

  for (let i = 0; i < splitIndex; i++) {
    if (currentK++ < K) {
      sum += -A[i];
    } else {
      sum += A[i];
    }
  }

  if (currentK < K) {
    let diffK = K - currentK;
    let min = Math.min(
      Math.abs(A[splitIndex]),
      splitIndex === 0 ? Number.MAX_SAFE_INTEGER : Math.abs(A[splitIndex - 1]),
      splitIndex === length - 1 ? Number.MAX_SAFE_INTEGER : A[splitIndex + 1]
    );

    if (diffK % 2 === 1) {
      sum -= min * 2;
    }
  }

  return sum;
};
