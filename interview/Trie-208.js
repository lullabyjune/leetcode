/**
 * Initialize your data structure here.
 */

function TreeNode(val) {
  this.val = val;
  this.children = [];
  this.canBeTail = false;
}

var Trie = function() {
  //  感觉题目本意不是想让我用TreeNode这样的数据结构去做？但是我是觉得既然是前缀树。。我就用树。要好一点？？
  //  虽然感觉讲道理来说用hashMap也很Ok...
  //  嘛。。不重要

  //  执行用时 :336 ms, 在所有 JavaScript 提交中击败了54.62%的用户
  //  内存消耗 :68.9 MB, 在所有 JavaScript 提交中击败了13.95%的用户

  this.trie = new TreeNode("");
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let pre = this.trie;

  for (let i = 0, length = word.length; i < length; i++) {
    let node = this.findChar(pre, word[i]);

    if (!node) {
      node = new TreeNode(word[i]);
      pre.children.push(node);
    }

    pre = node;
  }

  pre.canBeTail = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let queue = [];
  let idx = 0;
  let tail;

  queue.push(this.trie);

  while (idx < word.length) {
    let node = queue.shift();

    let child = this.findChar(node, word[idx++]);

    if (!child) return false;

    queue.push(child);
    tail = child;
  }

  return tail.canBeTail;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let queue = [];
  let idx = 0;

  queue.push(this.trie);

  while (idx < prefix.length) {
    let node = queue.shift();

    let child = this.findChar(node, prefix[idx++]);

    if (!child) return false;

    queue.push(child);
  }

  return true;
};

//  @internal function, to find node of char if char in trie, if not, return undefined
Trie.prototype.findChar = function(father, char) {
  let node = father.children.find(child => child.val === char);

  return node || undefined;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
