class Stack {
  constructor(array) {
    if (array === undefined) {
      this.stack = [];
    } else {
      if (!Array.isArray(array)) {
        throw new Error("어레이 구조가 아닙니다");
      }
      this.stack = array;
    }
  }

  pop() {
    return this.stack.splice(this.stack.length - 1, 1)[0];
  }

  push(value) {
    this.stack[this.stack.length] = value;
  }
}

module.exports = Stack;
