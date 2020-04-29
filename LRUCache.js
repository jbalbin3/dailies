// var LRUCache = function(capacity) {
//   this._capacity = capacity;
//   this._list = new List;
//   this._storage = {};
//   this._size = 0;
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//   if(!(key in this._storage)) { return -1 }

//   var mem = this._storage[key];
//   this._list.moveToFront(mem.node);
//   return mem.val

//   // // traverse the list to find the key and set that node as the tail
//   // var traverseList = function(node) {
//   //   if(node === null) { return; }
//   //   if(node.val === key) {
//   //     this.list.moveToEnd(node);
//   //     return;
//   //   } else if(node.next === null) {
//   //     return;
//   //   } else {
//   //     traverseList.call(this, node.next);
//   //   }
//   // }
//   // traverseList.call(this, this.list.head);
//   // // return the value in O(1) time
//   // if (this._storage[key] === undefined) {
//   //   return -1
//   // } else {
//   //   return this._storage[key];
//   // }
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//   console.log('PUUUUUUUUUUT!!!!!', key, value)
//   var mem;
//   if (key in this._storage) {
//     mem = this._storage[key];
//     mem.val = value;
//     this._list.moveToFront(mem.node);

//   } else {
//     // Make space if necessary
//     console.log('SIZE',this._size,'CAP', this._capacity)
//     if (this._size >= this._capacity) {
//         var oldest = this._list.pop();
//         console.log('OLDEST',oldest)
//         delete this._storage[oldest.key];
//         console.log('NEW STORAGE', this._storage);
//         this._size = Math.max(0, this._size - 1);
//         console.log('NEW SIZE', this._size)
//     }
//     console.log('skipped')
//     this._size += 1;

//     mem = new LRUCacheItem(value, key);
//     console.log('LIST1', this._list)

//     mem.node = this._list.unshift(mem);
//     console.log('LIST2', this._list)
//     console.log('MEM',mem);
//     this._storage[key] = mem;
//     console.log('ADD',this._storage)
//   }

//   // if(this.size() === this.limit) {
//   //   // shift out head
//   //   var keyRemove = this.list.shift();
//   //   delete this._storage[keyRemove];
//   // }
//   // // add to tail
//   // this.list.push(key);
//   // // set the key/value in O(1) time
//   // this._storage[key] = value
// };

// LRUCache.prototype.size = function () {  // the number of items inside cache
//   return Object.keys(this._storage).length;
// };

// var LRUCacheItem = function (val, key) {
//   this.val = val === undefined ? null : val;
//   this.key = key === undefined ? null : key;
//   this.node = null;
// };



// var List = function () {
//   this.head = null;
//   this.tail = null;
// };

// var ListNode = function (prev, val, next) {
//   this.prev = prev || null;
//   this.val = val;
//   this.next = next || null;
// };

// // Insert at the head of the list.
// List.prototype.unshift = function (val) {
//   // Empty list
//   if (this.head === null && this.tail === null) {
//     this.head = this.tail = new ListNode(null, val, null);
//   // Not empty list.
//   } else {
//     this.head = new ListNode(null, val, this.head);
//     this.head.next.prev = this.head;
//   }

//   return this.head;
// };

// // Delete at the head of the list.
// List.prototype.shift = function () {
//   // Empty list
//   if (this.head === null && this.tail === null) {
//     return null;
//   // Not empty list.
//   } else {
//     var head = this.head;
//     this.head = this.head.next;
//     head.delete();
//     return head.val;
//   }
// };

// // Insert at the end of the list.
// List.prototype.push = function (val) {
//   // Empty list
//   if (this.head === null && this.tail === null) {
//     this.head = this.tail = new ListNode(null, val, null);
//   // Not empty list.
//   } else {
//     this.tail = new ListNode(this.tail, val, null);
//     this.tail.prev.next = this.tail;
//   }

//   return this.tail;
// };

// // Delete at the end of the list.
// List.prototype.pop = function () {
//   // Empty list
//   console.log('h',this.head, 't',this.tail)
//   if (this.head === null && this.tail === null) {
//     return null;
//   // Not empty list.
//   } else {
//     var tail = this.tail;
//     console.log('tail?',tail)
//     this.tail = this.tail.prev;
//     tail.delete();
//     return tail.val;
//   }
// };

// // Move a node to the front of the List
// List.prototype.moveToFront = function (node) {
//   if (node === this.tail) {
//     this.pop();
//   } else if (node === this.head) {
//     return;
//   } else {
//     node.delete();
//   }

//   node.prev = node.next = null;

//   // Don't delegate to shift, since we want to keep the same
//   // object.

//   // Empty list
//   if (this.head === null && this.tail === null) {
//     this.head = this.tail = node;
//   // At least one node.
//   } else {
//     this.head.prev = node;
//     node.next = this.head;
//     this.head = node;
//   }
// };

// // Move a node to the end of the List
// List.prototype.moveToEnd = function (node) {
//   if (node === this.head) {
//     this.shift();
//   } else if (node === this.tail) {
//     return;
//   } else {
//     node.delete();
//   }

//   // Don't delegate to push, since we want to keep the same
//   // object.

//   node.prev = node.next = null;

//   // Empty list
//   if (this.head === null && this.tail === null) {
//     this.head = this.tail = node;
//   // At least one node.
//   } else {
//     this.tail.next = node;
//     node.prev = this.tail;
//     this.tail = node;
//   }
// };

// ListNode.prototype.delete = function () {
//   if (this.prev) { this.prev.next = this.next; }
//   if (this.next) { this.next.prev = this.prev; }
// };


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.storage = {};   // storage to storage
  this.size = 0;

  this.head = new DualLList;
  this.tail = new DualLList;
  this.head.next = this.tail;
  this.tail.prev = this.head;

};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(!(key in this.storage)) { return -1 }

  let node = this.storage[key];
  this.moveToFront(node);
  return node.val
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node;

  if (key in this.storage) {
    node = this.storage[key];
    node.val = value;
    this.moveToFront(node);
  } else {
    node = new DualLList(key, value);

    this.storage[key] = node;
    this.moveToFront(node);
    this.size += 1;
    if (this.size > this.capacity) {
        const node = this.tail.prev;
        delete this.storage[node.key]

        if (node.prev && node.next) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.size -= 1;
    }
  }

  this.moveToFront(node);

};

var DualLList = function (key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this .prev = null;
};


LRUCache.prototype.moveToFront = function(node) {
    if (node.prev && node.next) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    node.next = this.head.next;
  node.next.prev = node;
  node.prev = this.head;
  this.head.next = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



var cache = new LRUCache(1)
console.log((cache));
cache.put(2,1);
console.log((cache));
cache.get(2); // 1
cache.put(3,2);
console.log(cache);
cache.get(2); // -1
cache.get(3); // 2