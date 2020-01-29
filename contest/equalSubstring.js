/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  //  牛逼就完事了，，，大佬始终是大佬。。。
  //  我写了几十行都没过。。别人几行就过了。。。
  //  还让我看了半小时差不多才看懂。。。懵了。。。
  //  大概算是。滑动窗口吧我感觉。

  let n = s.length;
  let ans = 0;
  let a = [0];

  for (let i = 0; i < n; i++)
    a[i + 1] = a[i] + Math.abs(s.charCodeAt(i) - t.charCodeAt(i));

  console.info(a.toString());

  for (let i = 1, j = 0; i <= n; i++) {
    while (a[i] - a[j] > maxCost) j++;

    console.info(i, j, a[i], a[j]);

    ans = Math.max(ans, i - j);
  }

  return ans;
};

const s = "szrpjazjjhorzeiduufspm",
  t = "rgwdrgligareauwihaqroy",
  maxCost = 55;

console.info(equalSubstring(s, t, maxCost));
