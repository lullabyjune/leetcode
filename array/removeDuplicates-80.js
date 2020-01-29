/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  //  这算是占了语言的便宜么? 毕竟js在数组中就地删除元素也就一个api的问题..
  //  不过仔细想想,即便说是C, 无非也就自己封装一下数组移位罢了.也不复杂
  //  甚至说如果自己封装的话还可以针对这个题做自定义需求, 比如说我可以一次扫描把所有需要去掉的数字做一个记录, 第二次进行移位就两次扫描就完事了
  //  不过这种做法就达不到要求的O1的额外空间了- -...嘛...嘻嘻嘻.就当我是占了便宜吧.

  let index = 2;

  if (nums.length < 3) return nums.length;

  while (index < nums.length) {
    if (nums[index] === nums[index - 1] && nums[index] === nums[index - 2]) {
      nums.splice(index, 1);
      continue;
    }

    index++;
  }

  return nums.length;
};
