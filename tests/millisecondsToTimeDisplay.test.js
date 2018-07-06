import { millisecondsToTimeDisplay } from "../src/view/millisecondsToTimeDisplay";

describe("millisecondsToTimeDisplay", () => {
  it("should convert 60,000 milliseconds to 1:00", () => {
    expect(millisecondsToTimeDisplay(60000)).toBe("1:00");
  });

  it("should convert 90,000 milliseconds to 1:00", () => {
    expect(millisecondsToTimeDisplay(90000)).toBe("1:30");
  });
});
