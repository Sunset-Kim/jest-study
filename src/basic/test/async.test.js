const fetch = require("../../basic/async/async");

describe("asnyc", () => {
  // done - 5002ms
  it("async done", (done) => {
    fetch().then((item) => {
      expect(item).toEqual({ title: "apple", count: 1 });
      done();
    });
  });

  // return - 1 ms
  it("async return", () => {
    return fetch().then((item) => {
      expect(item).toEqual({ title: "apple", count: 1 });
    });
  });

  // await - 1 ms
  it("async await", async () => {
    const result = await fetch();
    expect(result).toEqual({ title: "apple", count: 1 });
  });
});
