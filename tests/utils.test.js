const { minutesToMilliseconds, isTimeUp, print } = require("../src/utils");

describe("minutesToMilliseconds", () => {
  it("should be a function", () => {
    expect(typeof minutesToMilliseconds).toBe("function");
  });
});

describe("isTimeUp", () => {
  it("should be a function", () => {
    expect(typeof isTimeUp).toBe("function");
  });
});

describe("print", () => {
  it("should be a function", () => {
    expect(typeof print).toBe("function");
  });
});
