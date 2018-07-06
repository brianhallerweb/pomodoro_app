import { isValidBreakIncrement, isValidBreakDecrement } from "./isValid";

export function incrementBreak() {
  if (isValidBreakIncrement()) {
    return { type: "INCREMENT_BREAK" };
  }
  return { type: "NONE" };
}

export function decrementBreak() {
  if (isValidBreakDecrement()) {
    return { type: "DECREMENT_BREAK" };
  }
  return { type: "NONE" };
}
