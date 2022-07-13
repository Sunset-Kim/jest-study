const check = require("../check");

describe("mock check test", () => {
  const predicate = () => true;
  const mockYesFn = jest.fn((str) => str);
  const mockNoFn = jest.fn((str) => str);

  it("check", () => {
    check(predicate, mockYesFn, mockNoFn);
    expect(mockYesFn.mock.calls.length).toBe(1);
  });
});
