const Calculator = require("../../basic/calculator/calculator");

describe("계산기 테스트코드", () => {
  let 계산기;
  beforeEach(() => {
    계산기 = new Calculator();
  });

  it("init", () => {
    expect(계산기.value).toBe(0);
  });

  it("set Number", () => {
    계산기.set(5);
    expect(계산기.value).toBe(5);
  });

  it("clear", () => {
    계산기.set(5);
    계산기.clear();
    expect(계산기.value).toBe(0);
  });

  it("덧셈", () => {
    계산기.add(2);
    expect(계산기.value).toBe(2);
  });

  it("100 넘는 덧셈 에러", () => {
    expect(() => 계산기.add(102)).toThrow("Value can not be greater than 100");
  });

  it("뺄셈", () => {
    계산기.subtract(5);
    expect(계산기.value).toBe(-5);
  });

  it("곱셈", () => {
    계산기.set(5);
    계산기.multiply(3);
    expect(계산기.value).toBe(15);
  });

  it("0을 0으로 나눗셈", () => {
    계산기.divide(0);
    expect(계산기.value).toBe(NaN);
  });

  it("숫자를 0 나눗셈", () => {
    계산기.set(2);
    계산기.divide(0);
    expect(계산기.value).toBe(Infinity);
  });
});
