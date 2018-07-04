const startPomodoro = require("./timers");
const { minutesToMilliseconds } = require("./utils");

const workPeriod = 5000;
const breakPeriod = 1000;
startPomodoro(workPeriod, breakPeriod);

// first enter command line like this:
// node pomodoro -w 25 -b 5

// pomodoro.js should read like this:
//const startPomodoro = require("./timers");

// const workPeriod = minutesToMilliseconds((readWorkInput());
// const breakPeriod = minutesToMilliseconds((readBreakInput());
// startPomodoro(workPeriod, breakPeriod);
// const figlet = require("figlet");
