export function timerReducer(state = { timer: 0 }, action) {
  switch (action.type) {
    case "DECREMENT_TIMER":
      return {
        timer: state.timer - 1000
      };
    case "SET_TIMER":
      return {
        timer: action.time
      };
    default:
      return state;
  }
}
