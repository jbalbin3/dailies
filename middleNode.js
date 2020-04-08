/*
Example 1:
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Example 2:
Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.


Note:

The number of nodes in the given list will be between 1 and 100.
*/

/**
 Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 */
/**
 @param {ListNode} head
 @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// head is not [1,2,3,4,5],
var middleNode = function(head) {
  // get length of linked list
  console.log('input', JSON.stringify(head))
  var count = 1;
  var next = head.next;
  while(next) {
    count += 1;
    next = next.next;
  }
  console.log('c',count);
  var ans = head;
  var stop = Math.floor(count/2);
  console.log('stop', stop);
  while(stop) {
    ans = ans.next;
    stop -= 1;
  }
  console.log('ret',ans);
  return ans;
};


// optimized
var middleNode = function(head) {
  var fast = head;
  var slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

// I: head pointing to the head of linked list
// O: middle node of the linked list
// C: 15-20min, discuss strategy, number of nodes will be between 1-100
// E:

// ListNode3 = { val:3,next: {val:4,next:{val:5,next: null}}}

var L1 = new ListNode(1);
var head = L1;
var L2 = new ListNode(2);
L1.next = L2;
var L3 = new ListNode(3);
L2.next = L3;
var L4 = new ListNode(4);
L3.next = L4;
var L5 = new ListNode(5);
L4.next = L5;
// L5.next = null;
var L6 = new ListNode(6);
L5.next = L6;
L6.next = null;

middleNode(head);

