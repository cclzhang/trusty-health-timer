
function TimerDisplay({hrs, mins, secs}) {

  let hours = parseInt(hrs);
  let minutes = parseInt(mins);
  let seconds = parseInt(secs);

  if (hours < 10) {
    hours = '0' + hrs;
  }
  if (minutes < 10) {
    minutes = '0' + mins;
  }
  if (seconds < 10) {
    seconds = '0' + secs;
  }

  return (
    <p>{`${hours}:${minutes}:${seconds}`}</p>
  );
}

export default TimerDisplay;