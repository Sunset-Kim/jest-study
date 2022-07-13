const forEach = require("../forEach");
const mockCallback = jest.fn((x) => 42 + x);

it("forEach length", () => {
  forEach([1, 9], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(2);
});
