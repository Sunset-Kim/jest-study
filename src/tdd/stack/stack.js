class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(value) {
    const node = {
      value,
      next: this.head,
    };

    this.head = node;
    this._size += 1;
  }

  pop() {
    if (this._size === 0) {
      throw new Error("Stack is empty");
    }
    const popItem = this.head;

    this.head = this.head.next;
    this._size -= 1;

    return popItem.value;
  }

  peek() {
    if (this._size === 0) {
      throw new Error("Stack is empty");
    }

    return this.head?.value;
  }
}

module.exports = Stack;
