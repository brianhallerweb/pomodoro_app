export function workReducer(state = { work: 1500000 }, action) {
  switch (action.type) {
    case "INCREMENT_WORK":
      return {
        work: state.work + 60000
      };
    case "DECREMENT_WORK":
      return {
        work: state.work - 60000
      };

    default:
      return state;
  }
}
