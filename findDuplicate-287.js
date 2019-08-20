/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  //  看题解的，说实话大概能勉强看懂个七七八八。。但是肯定想不到会这么去做就是了
  //  如果真要满足各种约束的话，的确没想到怎么做，如果不满足约束的话，这题又过于简单- -。

  //  还看到一个用二分的，不过有点牛逼的是，和一般二分不一样，这次是对于整个数字的区间做二分，而不是跟普通的对index做二分。
  //  这个 有点牛逼0-0，反正 没想到。

  let tortoise = nums[0];
  let hare = nums[0];

  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise != hare);

  let ptr1 = nums[0],
    ptr2 = tortoise;

  while (ptr1 !== ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
};
