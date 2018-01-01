/**
 * Class representing a doubly linked list's node.
 */
class Node {
  /**
   * @constructor
   */
  constructor(item) {
    this._next = null;
    this._prev = null;
    this._item = item;
  }

  /**
   * Set next node.
   * @param node
   */
  setNext(node) {
    this._next = node;
  }

  /**
   * Get next node.
   * @return {*}
   */
  getNext() {
    return this._next;
  }

  /**
   * Set previous node.
   * @param node
   */
  setPrev(node) {
    this._prev = node;
  }

  /**
   * Get previous node.
   * @return {*}
   */
  getPrev() {
    return this._prev;
  }

  /**
   * Set item.
   * @param item
   */
  setItem(item) {
    this._item = item;
  }

  /**
   * Get item.
   * @return {*}
   */
  getItem() {
    return this._item;
  }
}

module.exports = Node;
