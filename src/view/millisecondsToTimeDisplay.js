// Time in the store is always in milliseconds. This function
// converts those milliseconds into a display friendly string

export function millisecondsToTimeDisplay(milliseconds) {
  let minutes = Math.floor(milliseconds / 60000, 0);
  let seconds = Math.floor((milliseconds / 1000) % 60, 0);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
}
