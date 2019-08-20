/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  //  大概是最傻逼的做法。。
  //  有一点听懵逼的是，写了缓存之后反而会超出时间限制。。。不写缓存直接abs存的话反而还跑通了。。。了。。了。
  //  在二分的专题，但是没想到二分怎么做0-0.。果然是菜逼没跑了

  let distanceMap = {};

  for (let i = 0, length = nums.length; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let distance = Math.abs(nums[i] - nums[j]);

      if (!distanceMap[distance]) {
        distanceMap[distance] = 0;
      }

      distanceMap[distance]++;
    }
  }

  let currentIndex = 0;

  for (let [distance, length] of Object.entries(distanceMap)) {
    currentIndex += length;

    if (currentIndex >= k) {
      return distance;
    }
  }
};
