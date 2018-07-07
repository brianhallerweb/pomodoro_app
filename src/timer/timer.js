import { store } from "../store/store";
import { decrementTimer, setTimer } from "../actions/timerActions";

// The pomodoro timer logic.
// startWorkSession calls start break session and vice versa,
// causing an intentional infinite loop between work sessions
// and break sessions.

function startPomodoro(workPeriod, breakPeriod) {
  function startWorkSession() {
    const endWorkTime = Date.now() + workPeriod;
    store.dispatch(setTimer(workPeriod));
    document.getElementById("timeDisplay").style.color = "green";
    document.getElementById("favicon").href = "favicons/greenfavicon.ico";
    const workSession = setInterval(() => {
      store.dispatch(decrementTimer());
      if (Date.now() > endWorkTime) {
        //work session over
        startBreakSession();
        clearInterval(workSession);
      }
    }, 1000);
  }
  function startBreakSession() {
    const endBreakTime = Date.now() + breakPeriod;
    store.dispatch(setTimer(breakPeriod));
    document.getElementById("timeDisplay").style.color = "red";
    document.getElementById("favicon").href = "favicons/redfavicon.ico";
    const breakSession = setInterval(() => {
      store.dispatch(decrementTimer());
      if (Date.now() > endBreakTime) {
        //break session over
        startWorkSession();
        clearInterval(breakSession);
      }
    }, 1000);
  }

  startWorkSession();
}

export default startPomodoro;
