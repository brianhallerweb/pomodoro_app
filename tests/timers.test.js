const startPomodoro = require("../src/timers");

describe("startPomodoro", () => {
  it("should be a function", () => {
    expect(typeof startPomodoro).toBe("function");
  });
});
