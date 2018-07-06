import { store } from "../store/store";
import { incrementWork, decrementWork } from "../actions/workActions";
import { incrementBreak, decrementBreak } from "../actions/breakActions";
import startPomodoro from "../timer/timer";
import { millisecondsToTimeDisplay } from "./millisecondsToTimeDisplay";

// All this code sets up the view and click handlers. The click handlers are
// removed after the pomodoro starts.

function incrementWorkCallBack() {
  store.dispatch(incrementWork());
}
function decrementWorkCallBack() {
  store.dispatch(decrementWork());
}
function incrementBreakCallBack() {
  store.dispatch(incrementBreak());
}
function decrementBreakCallBack() {
  store.dispatch(decrementBreak());
}

function initView() {
  const state = store.getState();
  document.getElementById("workMinutes").innerText = millisecondsToTimeDisplay(
    state.work.work
  );
  document.getElementById("breakMinutes").innerText = millisecondsToTimeDisplay(
    state.break.break
  );
  document.getElementById("timeDisplay").innerText = millisecondsToTimeDisplay(
    state.timer.timer
  );

  document
    .getElementById("workPlus")
    .addEventListener("click", incrementWorkCallBack);
  document
    .getElementById("workMinus")
    .addEventListener("click", decrementWorkCallBack);
  document
    .getElementById("breakPlus")
    .addEventListener("click", incrementBreakCallBack);
  document
    .getElementById("breakMinus")
    .addEventListener("click", decrementBreakCallBack);

  document.getElementById("start").addEventListener("click", () => {
    const state = store.getState();
    startPomodoro(state.work.work, state.break.break);

    document.getElementById("start").disabled = true;
    document
      .getElementById("workPlus")
      .removeEventListener("click", incrementWorkCallBack);
    document
      .getElementById("workMinus")
      .removeEventListener("click", decrementWorkCallBack);
    document
      .getElementById("breakPlus")
      .removeEventListener("click", incrementBreakCallBack);
    document
      .getElementById("breakMinus")
      .removeEventListener("click", decrementBreakCallBack);
  });
}

export default initView;
