const { isTimeUp, message } = require("./utils");

function startPomodoro(workPeriod, breakPeriod) {
  function startWorkSession() {
    const endWorkTime = Date.now() + workPeriod;

    const workSession = setInterval(() => {
      if (isTimeUp(Date.now(), endWorkTime)) {
        console.log(message("stop"));
        startBreakSession();
        clearInterval(workSession);
      }
    }, 1000);
  }
  function startBreakSession() {
    const endBreakTime = Date.now() + breakPeriod;

    const breakSession = setInterval(() => {
      if (isTimeUp(Date.now(), endBreakTime)) {
        console.log(message("start"));
        startWorkSession();
        clearInterval(breakSession);
      }
    }, 1000);
  }

  // startWorkSession calls start break session and vice versa,
  // causing an intentional infinite loop between work sessions
  // and break sessions
  startWorkSession();
}

module.exports = startPomodoro;
