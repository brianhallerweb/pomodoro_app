import { store } from "../store/store";

// These validation functions ensure that work sessions and
// break sessions stay between 1 minute (60000 milliseconds)
// and 59 minutes (3540000 milliseconds)

export function isValidWorkIncrement() {
  const state = store.getState();
  if (state.work.work === 3540000) {
    return false;
  }
  return true;
}
export function isValidWorkDecrement() {
  const state = store.getState();
  if (state.work.work === 60000) {
    return false;
  }
  return true;
}
export function isValidBreakIncrement() {
  const state = store.getState();
  if (state.break.break === 3540000) {
    return false;
  }
  return true;
}
export function isValidBreakDecrement() {
  const state = store.getState();
  if (state.break.break === 60000) {
    return false;
  }
  return true;
}
