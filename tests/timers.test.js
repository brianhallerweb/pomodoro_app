import startPomodoro from "../src/timer/timer";

describe("startPomodoro", () => {
  it("should be a function", () => {
    expect(typeof startPomodoro).toBe("function");
  });
});
