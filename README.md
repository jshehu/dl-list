# Doubly Linked List
This package is a javascript implementation of Doubly Linked List.

### API
#### List
 - `list#insert(item)` - Insert to list.
 - `list#insertBeginning(item)` - Insert at beginning of list.
 - `list#insertEnd(item)` - Insert at end of list.
 - `list#insertBefore(node, item)` - Insert before node.
 - `list#insertAfter(node, item)` - Insert after node.
 - `list#remove(node)` - Remove node.
 - `list#removeByItem(item)` - Remove node by item.
 - `list#removeByIndex(index)` - Remove node by index.
 - `list#removeFirst()` - Remove first node.
 - `list#removeLast()` - Remove last node.
 - `list#getByItem(item)` - Get node by item.
 - `list#getByIndex(item)` - Get node by index.
 - `list#getFirst()` - Get first node in list.
 - `list#getLast()` - Get last node in list.
 - `list#has(item)` - Determine whether item exists in list.
 - `list#iterator()` - Return an iterator over list nodes.
 - `list#reverseIterator()` - Return an iterator over list items in reverse order.
 - `list#itemsIterator()` - Return an iterator over list items.
 - `list#itemsReverseIterator()` - Return an iterator over list items in reverse order.
 - `list#length()` - Return number of nodes.
#### Node
 - `node#setNext(node)` - Set next node.
 - `node#getNext()` - Get next node.
 - `node#setPrev(node)` - Set previous node.
 - `node#getPrev()` - Get previous node.
 - `node#setItem(item)` - Set item.
 - `node#getItem()` - Get item.

### Installation
```sh
npm i -S dl-list
```

### Example
```js
const DoubyLinkedList = require('dl-list');

const list = new DoubyLinkedList();

list.insert(1);
list.insertBeginning(10);
list.insertEnd(5);
list.insertBefore(list.getLast(), 15);
list.insertAfter(list.getFirst(), 20);

for (const node of list.iterator()) {
  console.log(node.getItem());
}

list.removeByIndex(1);
list.remove(list.getFirst());
list.removeFirst();
list.removeLast();

for (const node of list.reverseIterator()) {
  console.log(node.getItem());
}

console.log('length:', list.length());
```