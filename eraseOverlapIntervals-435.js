/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  //  我太菜了,做了可能一个小时
  //  最后还是有边界没处理清楚, 18个用例只过了16个
  //  最后还是看题解写的..哎

  if (!intervals || !intervals.length) return 0;

  let count = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  intervals.reduce((prev, cur) => {
    if (prev[1] > cur[0]) {
      if (prev[1] > cur[1]) {
        prev = cur;
      }

      count++;
    } else {
      prev = cur;
    }

    return prev;
  });

  return count;
};
