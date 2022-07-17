class Stack {
  constructor() {
    this.stack = [];
  }

  size() {
    return this.stack.length;
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error("stack is empty");
    }
    return this.stack.splice(this.stack.length - 1, 1)[0];
  }

  push(value) {
    this.stack[this.stack.length] = value;
  }

  peek() {
    if (this.stack.length <= 0) {
      throw new Error("stack is empty");
    }
    return this.stack[this.stack.length - 1];
  }
}

module.exports = Stack;
