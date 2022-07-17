const Stack = require("../stack");

// 스택 시작
describe("Stack size", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("stack 비었을때", () => {
    expect(stack.size()).toBe(0);
    expect(() => stack.pop()).toThrow();
    stack.push(1);
    expect(stack.size()).toBe(1);
    expect(stack.pop()).toEqual(1);
  });
});

describe("Stack Peek", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("Peek - 요소가 없을 때", () => {
    expect(() => stack.peek()).toThrow();
  });

  it("Push - 요소가 있을때", () => {
    stack.push(1);
    stack.peek();
    expect(stack.peek()).toBe(1);
    expect(stack.size()).toBe(1);
  });
});
