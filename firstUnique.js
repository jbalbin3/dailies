/*
You have a queue of integers, you need to retrieve the first unique integer in the queue.

Implement the FirstUnique class:

FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
void add(int value) insert value to the queue.


Example 1:

Input:
["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
[[[2,3,5]],[],[5],[],[2],[],[3],[]]
Output:
[null,2,null,2,null,3,null,-1]

Explanation:
FirstUnique firstUnique = new FirstUnique([2,3,5]);
firstUnique.showFirstUnique(); // return 2
firstUnique.add(5);            // the queue is now [2,3,5,5]
firstUnique.showFirstUnique(); // return 2
firstUnique.add(2);            // the queue is now [2,3,5,5,2]
firstUnique.showFirstUnique(); // return 3
firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
firstUnique.showFirstUnique(); // return -1

Example 2:

Input:
["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
Output:
[null,-1,null,null,null,null,null,17]

Explanation:
FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
firstUnique.showFirstUnique(); // return -1
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
firstUnique.showFirstUnique(); // return 17

Example 3:

Input:
["FirstUnique","showFirstUnique","add","showFirstUnique"]
[[[809]],[],[809],[]]
Output:
[null,809,null,-1]

Explanation:
FirstUnique firstUnique = new FirstUnique([809]);
firstUnique.showFirstUnique(); // return 809
firstUnique.add(809);          // the queue is now [809,809]
firstUnique.showFirstUnique(); // return -1



Constraints:

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^8
1 <= value <= 10^8
At most 50000 calls will be made to showFirstUnique and add.

Hint #1
Use doubly Linked list with hashmap of pointers to linked list nodes. add unique number to the linked list. When add is called check if the added number is unique then it have to be added to the linked list and if it is repeated remove it from the linked list if exists. When showFirstUnique is called retrieve the head of the linked list.

*/



/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
  this.numbers = new Set();
  this.noDupes = new Set();

  nums.forEach(num=> this.add(num))
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  if(!this.noDupes.size) {
    return -1;
  }
  for (let val of this.noDupes) {
    return val;
  }
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if(this.numbers.has(value)) {
    this.noDupes.delete(value);
  } else {
    this.numbers.add(value);
    this.noDupes.add(value);
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

nums = [2,3,5]
var obj = new FirstUnique(nums)
console.log(obj)
var param1 = obj.showFirstUnique()
console.log(param1)
obj.add(2)
console.log(obj)
param1 = obj.showFirstUnique()
console.log(param1)

// DLL version

class DLLNode {
  constructor(val) {
    this.val = val;
    this.count = 1;
    this.prev = null;
    this.next = null;
  }
}

var FirstUnique = function(nums) {
  this.unique = {};
  this.head = new DLLNode(null);
  this.tail = new DLLNode(null);
  this.head.next = this.tail;
  this.tail.prev = this.head;

  nums.forEach(val => this.add(val));
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  return this.head.next.val || -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(val) {
  let node;
  if (!(val in this.unique)) {
    node = new DLLNode(val);
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.unique[val] = node;
  } else {
    node = this.unique[val];
    if (node.count === 1) {
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }
    node.count++;
  }
};