import { isValidWorkIncrement, isValidWorkDecrement } from "./isValid";

export function incrementWork() {
  if (isValidWorkIncrement()) {
    return { type: "INCREMENT_WORK" };
  }
  return { type: "NONE" };
}

export function decrementWork() {
  if (isValidWorkDecrement()) {
    return { type: "DECREMENT_WORK" };
  }
  return { type: "NONE" };
}
