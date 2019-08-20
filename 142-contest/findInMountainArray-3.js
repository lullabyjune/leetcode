/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {integer} index
 *     @return {integer}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {integer}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    //  感觉应该是能过的，然而并没有
    //  最后报错的JSON输入格式错误，大概是提交后台测试那边的问题？
    //  反正我很迷。。因为把当时报错的用例复制到自定义测试里面又是可以正常跑的-0-.
    


    //  哦对了，不管怎样应该都是过不了才对- -。因为我直接把题目理解错了。。fine。。
    let length = mountainArr.length(),
        left = 0,
        right = length,
        middle = Math.floor((left + right) / 2),
        nowNum = mountainArr.get(middle)
    
    while (nowNum !== target) {
        if (nowNum < target) {
            left = middle
        } else {
            right = middle
        }
        
        if (right - left <= 1)  return -1
        
        middle = Math.floor((left + right) / 2)
        nowNum = mountainArr.get(middle)
    }
    
    return middle
};