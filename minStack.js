/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.index = 0;
  this.storage = {};
  this.smallest = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.index += 1;
    this.storage[this.index] = x;
    this.smallest = x < this.smallest ? x : this.smallest;
    console.log(JSON.stringify(this))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var temp = this.storage[this.index];
    delete this.storage[this.index];
    this.index -= 1;
    if(!Object.keys(this.storage).length) {
      this.smallest = Infinity;
    }
    if(temp === this.smallest) {
          console.log('val popped',temp, 'smallest', this.smallest)
          console.log(Object.values(this.storage).sort((a, b)=>a-b));
      this.smallest = Object.values(this.storage).sort((a, b)=>a-b)[0];
    }
    console.log('pop',JSON.stringify(this))
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  console.log('top',this.storage[this.index]);
  return this.storage[this.index];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   console.log('smallest',this.smallest)
   return this.smallest;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output:
[null,null,null,null,undefined,null,NaN,undefined]
Expected:
[null,null,null,null,-3,null,0,-2]


var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-1);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();


Input:
["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
[[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]
Output:
[null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,undefined,null,-2147483648,undefined,null,undefined]
Expected:
[null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,2147483647,null,-2147483648,-2147483648,null,2147483647]


var minStack = new MinStack();
minStack.push(2147483646);
minStack.push(2147483646);
minStack.push(2147483647);
minStack.top();
minStack.pop();
minStack.getMin();
minStack.pop();
minStack.getMin();
minStack.pop();
minStack.push(2147483647);
minStack.top();
minStack.getMin();
minStack.push(2147483648);
minStack.top();
minStack.getMin();
minStack.pop();
minStack.getMin();

minStack.push();
*/

var minStack = new MinStack();
minStack.push();
minStack.getMin(395);
minStack.top();
minStack.getMin();
minStack.push(276);
minStack.push(29);
minStack.getMin();
minStack.push(-482);
minStack.getMin();
minStack.pop();
minStack.push(-108);
minStack.push(-251);
minStack.getMin();
minStack.push(-439);
minStack.top();
minStack.push(370);
minStack.pop();
minStack.pop();
minStack.getMin();

