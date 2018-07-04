var cowsay = require("cowsay");

function minutesToMilliseconds(minutes) {
  return minutes * 60000;
}

function isTimeUp(startTime, stopTime) {
  return startTime > stopTime ? true : false;
}

function print(message) {
  console.log(
    cowsay.say({
      text: message,
      e: "oO",
      T: "U "
    })
  );
}

module.exports = {
  minutesToMilliseconds,
  isTimeUp,
  print
};
