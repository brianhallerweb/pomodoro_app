export function breakReducer(state = { break: 300000 }, action) {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return {
        break: state.break + 60000
      };
    case "DECREMENT_BREAK":
      return {
        break: state.break - 60000
      };

    default:
      return state;
  }
}
