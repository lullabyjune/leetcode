/**
 * Initialize your data structure here.
 */

    //  执行用时 :72 ms, 在所有 JavaScript 提交中击败了88.21%的用户
    //  内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了68.60%的用户
    
var MyStack = function() {
    this.pushQuene = []
    this.popQuene = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.pushQuene.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.pushQuene.length > 1) {
        this.popQuene.push(this.pushQuene.shift())
    }
    
    let item = this.pushQuene.shift()
    
    while (this.popQuene.length) {
        this.pushQuene.push(this.popQuene.shift())
    }
    
    return item
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.pushQuene.length > 1) {
        this.popQuene.push(this.pushQuene.shift())
    }
    
    let item = this.pushQuene[0]
    
    this.popQuene.push(this.pushQuene.shift())
    
    while (this.popQuene.length) {
        this.pushQuene.push(this.popQuene.shift())
    }
    
    return item
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.pushQuene.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */