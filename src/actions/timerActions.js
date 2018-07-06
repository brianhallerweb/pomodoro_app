export function decrementTimer() {
  return { type: "DECREMENT_TIMER" };
}

export function setTimer(time) {
  return { type: "SET_TIMER", time };
}
