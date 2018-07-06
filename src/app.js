import { store } from "./store/store";
import initView from "./view/initView";
import { millisecondsToTimeDisplay } from "./view/millisecondsToTimeDisplay";

initView();

// The view is updated after each change to the store.
store.subscribe(() => {
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
});
