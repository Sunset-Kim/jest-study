const Stack = require("../stack");

// 스택 시작
describe("Stack Input Test", () => {
  let stack;

  it("stack valid Init", () => {
    stack = new Stack([1, 2]);
    expect(stack.stack).toEqual([1, 2]);
  });

  it("stack no Input", () => {
    stack = new Stack();
    expect(stack.stack).toEqual([]);
  });

  it("stack invalid Input", () => {
    expect(() => {
      stack = new Stack({});
    }).toThrow();
  });
});

// 스택 팝
describe("Stack Pop Test", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack([1]);
  });

  it("Pop - 요소가 있을때", () => {
    expect(stack.pop()).toEqual(1);
    expect(stack.stack).toEqual([]);
  });

  it("Pop - 요소가 없을때", () => {
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
    expect(stack.stack).toEqual([]);
  });
});

describe("Stack Push", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack([1]);
  });

  it("Push - 요소가 있을때", () => {
    stack.push(1);
    expect(stack.stack).toEqual([1, 1]);

    stack.push([1, 2]);
    expect(stack.stack).toEqual([1, 1, [1, 2]]);
  });
});
