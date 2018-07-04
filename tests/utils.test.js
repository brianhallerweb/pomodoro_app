const { minutesToMilliseconds, isTimeUp, message } = require("../src/utils");

describe("minutesToMilliseconds", () => {
  it("should convert minutes to milliseconds", () => {
    const result = minutesToMilliseconds(1);
    expect(result).toBe(60000);
  });
});

describe("isTimeUp", () => {
  it("should check whether the time is up", () => {
    const result1 = isTimeUp(1, 2);
    expect(result1).toBe(false);

    const result2 = isTimeUp(1, 1);
    expect(result2).toBe(false);

    const result3 = isTimeUp(2, 1);
    expect(result3).toBe(true);
  });
});

describe("message", () => {
  it("should be a function", () => {
    const result = message("start");
    expect(typeof result).toBe("string");
  });
});
