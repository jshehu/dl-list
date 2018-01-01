const Node = require('./Node');

/**
 * Class representing a doubly linked list.
 */
class DoublyLinkedList {
  /**
   * @constructor
   */
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Insert item at the end of list.
   * @param item
   */
  insert(item) {
    return this.insertEnd(item);
  }

  /**
   * Insert item at the beginning of list.
   * @param item
   */
  insertBeginning(item) {
    this._length += 1;
    const newNode = new Node(item);
    if (this._head) {
      newNode.setNext(this._head);
      this._head.setPrev(newNode);
      this._head = newNode;
    }
    if (!this._head) {
      this._head = newNode;
    }
    if (!this._tail) {
      this._tail = newNode;
    }
  }

  /**
   * Insert item at the end of list.
   * @param item
   */
  insertEnd(item) {
    this._length += 1;
    const newNode = new Node(item);
    if (this._tail) {
      newNode.setPrev(this._tail);
      this._tail.setNext(newNode);
      this._tail = newNode;
    }
    if (!this._head) {
      this._head = newNode;
    }
    if (!this._tail) {
      this._tail = newNode;
    }
  }

  /**
   * Insert before node.
   * @param node
   * @param item
   */
  insertBefore(node, item) {
    for (const nodePointer of this.iterator()) { // eslint-disable-line
      if (nodePointer === node) {
        this._length += 1;
        const newNode = new Node(item);
        if (nodePointer.getPrev()) {
          nodePointer.getPrev().setNext(newNode);
          newNode.setPrev(nodePointer.getPrev());
        }
        nodePointer.setPrev(newNode);
        newNode.setNext(nodePointer);
        if (!newNode.getPrev()) {
          this._head = newNode;
        }
        break;
      }
    }
  }

  /**
   * Insert after node.
   * @param node
   * @param item
   */
  insertAfter(node, item) {
    for (const nodePointer of this.iterator()) { // eslint-disable-line
      if (nodePointer === node) {
        this._length += 1;
        const newNode = new Node(item);
        if (nodePointer.getNext()) {
          nodePointer.getNext().setPrev(newNode);
          newNode.setNext(nodePointer.getNext());
        }
        nodePointer.setNext(newNode);
        newNode.setPrev(nodePointer);
        if (!newNode.getNext()) {
          this._tail = newNode;
        }
        break;
      }
    }
  }

  /**
   * Remove node.
   * @param node
   * @return {boolean}
   */
  remove(node) {
    if (node instanceof Node) {
      const prev = node.getPrev();
      if (node.getPrev()) {
        node.getPrev().setNext(node.getNext());
      } else {
        this._head = node.getNext();
      }
      if (node.getNext()) {
        node.getNext().setPrev(prev);
      } else {
        this._tail = node.getPrev();
      }
      this._length -= 1;
      return true;
    }
    return false;
  }

  /**
   * Remove node by item.
   * @param item
   * @return {boolean}
   */
  removeByItem(item) {
    return this.remove(this.getByItem(item));
  }

  /**
   * Remove node by index.
   * @param index
   * @return {boolean}
   */
  removeByIndex(index) {
    if (index < this._length) {
      let i = 0;
      for (let node of this.iterator()) { // eslint-disable-line
        if (index === i) {
          if (node.getPrev()) {
            node.getPrev().setNext(node.getNext());
          } else {
            this._head = node.getNext();
          }
          if (node.getNext()) {
            node.getNext().setPrev(node.getPrev());
          } else {
            this._tail = node.getPrev();
          }
          this._length -= 1;
          return true;
        }
        i += 1;
      }
    }
    return false;
  }

  /**
   * Remove first node.
   * @return {boolean}
   */
  removeFirst() {
    return this.remove(this._head);
  }

  /**
   * Remove last node.
   * @return {boolean}
   */
  removeLast() {
    return this.remove(this._tail);
  }

  /**
   * Get node by item.
   * @param item
   * @return {*}
   */
  getByItem(item) {
    for (const nodePointer of this.iterator()) { // eslint-disable-line
      if (nodePointer.getItem() === item) {
        return nodePointer;
      }
    }
    return null;
  }

  /**
   * Get node by index.
   * @param index
   * @return {null}
   */
  getByIndex(index) {
    if (index < this._length) {
      let i = 0;
      for (let node of this.iterator()) { // eslint-disable-line
        if (index === i) {
          return node;
        }
        i += 1;
      }
    }
    return null;
  }

  /**
   * Get first node.
   * @return {null|*}
   */
  getFirst() {
    return this._head;
  }

  /**
   * Get last node.
   * @return {null|*}
   */
  getLast() {
    return this._tail;
  }

  /**
   * Is node in this list?
   * @param node
   * @return {boolean}
   */
  has(item) {
    return !!this.getByItem(item);
  }

  /**
   * Iterate list.
   */
  * iterator() {
    if (this._head) {
      let iterator = this._head;
      while (iterator) {
        yield iterator;
        iterator = iterator.getNext();
      }
    }
  }

  /**
   * Iterate list in reverse.
   */
  * reverseIterator() {
    if (this._tail) {
      let iterator = this._tail;
      while (iterator) {
        yield iterator;
        iterator = iterator.getPrev();
      }
    }
  }

  /**
   * Get node's number.
   * @return {number}
   */
  length() {
    return this._length;
  }
}

module.exports = DoublyLinkedList;
