const argv = require("yargs").argv;
const startPomodoro = require("./timers");
const { minutesToMilliseconds } = require("./utils");

// enter command line like this:
// node src/pomodoro --w=25 --b=5

const workPeriod = minutesToMilliseconds(argv.w);
const breakPeriod = minutesToMilliseconds(argv.b);
startPomodoro(workPeriod, breakPeriod);
