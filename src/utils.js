var cowsay = require("cowsay");

function minutesToMilliseconds(minutes) {
  return minutes * 60000;
}

function isTimeUp(startTime, stopTime) {
  return startTime > stopTime ? true : false;
}

function message(text) {
  return cowsay.say({
    text: text,
    e: "oO",
    T: "U "
  });
}

module.exports = {
  minutesToMilliseconds,
  isTimeUp,
  message
};
