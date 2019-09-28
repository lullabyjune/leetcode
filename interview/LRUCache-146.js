/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  //  O(1)的，用Set去存的那个trace
  //  一开始用的hash，居然超时了，我很懵逼。。
  //  而且都是同样的delete 和 add。。没有一丁点多余的操作，hash和set相比。。
  //  只能理解是js对于hash的操作真的很慢吧。。毕竟。。的确是这样的- -。。。同样的东西用数组都要快很多。。

  //  执行用时 :296 ms, 在所有 JavaScript 提交中击败了92.72%的用户
  //  内存消耗 :57.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户

  this.cacheMap = new Map(); //  Map<number, number>
  this.traceSet = new Set(); //  Set to trace key use as hashKey like 'key_1'
  this.maxLength = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.traceSet.has(key)) {
    this.traceSet.delete(key);
  }

  if (this.cacheMap.has(key)) {
    this.traceSet.add(key);

    return this.cacheMap.get(key);
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.traceSet.has(key)) {
    this.traceSet.delete(key);
  }

  this.traceSet.add(key);

  if (this.traceSet.size > this.maxLength) {
    let deleteKey;

    for (let key of this.traceSet) {
      deleteKey = key;
      break;
    }

    this.traceSet.delete(deleteKey);
    this.cacheMap.delete(deleteKey);
  }

  this.cacheMap.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  //  非O(1)，说实话我觉得光是题目我就理解了半天- - 。
  //  主要是在处理traceQueue那里有一个O（N），但是那一块没想到怎么优化

  //  执行用时 :424 ms, 在所有 JavaScript 提交中击败了44.44%的用户
  //  内存消耗 :58 MB, 在所有 JavaScript 提交中击败了96.36%的用户

  this.cacheMap = new Map(); //  Map<number, number>
  this.traceQueue = []; //  queue to trace key use
  this.maxLength = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let idx = this.traceQueue.findIndex(item => item === key);

  if (idx >= 0) {
    this.traceQueue.splice(idx, 1);
  }

  if (this.cacheMap.has(key)) {
    this.traceQueue.push(key);

    return this.cacheMap.get(key);
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let idx = this.traceQueue.findIndex(item => item === key);

  if (idx >= 0) {
    this.traceQueue.splice(idx, 1);
  }

  this.traceQueue.push(key);

  if (this.traceQueue.length > this.maxLength) {
    let deleteKey = this.traceQueue.shift();

    this.cacheMap.delete(deleteKey);
  }

  this.cacheMap.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
