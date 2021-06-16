import './TimerInput.css';
import { useState } from 'react';


function TimerInput(props) {
  const [hrs, setHrs] = useState('0');
  const [mins, setMins] = useState('0');
  const [secs, setSecs] = useState('0');
  
  console.log(hrs, mins, secs);
  const hrsRegex = "^(1[0-6]|[1-9])$";
  const minsAndSecsRegex = "^[0-5]?[0-9]$";
  const handleHrs = (e) => {
    if (e.target.value.match(hrsRegex)) {
      setHrs(e.target.value);
    }
    if (e.target.value === '') {
      setHrs('0');
    }
  }

  const handleMins = (e) => {
    if (e.target.value.match(minsAndSecsRegex)) {
      setMins(e.target.value);
    }
    else if (e.target.value === '') {
      setMins('0');
    }
    console.log(mins);
  }

  const handleSecs = (e) => {
    if (e.target.value.match(minsAndSecsRegex)) {
      setSecs(e.target.value);
    }
    else if (e.target.value === '') {
      setSecs('0');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let hours = parseInt(hrs);
    let minutes = parseInt(mins);
    let seconds = parseInt(secs);

    if(hours < 10) {
      hours = '0' + hrs;
    }
    if (minutes < 10) {
      minutes = '0' + mins;
    }
    if (seconds < 10) {
      seconds = '0' + secs;
    }

    props.setTimer(`${hours}:${minutes}:${seconds}`);
    props.toggle();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          name="timerHr" 
          className="timerInput" 
          id="timerHr" 
          placeholder='0'
          onChange={handleHrs} 
          value={hrs === '0' ? '' : hrs}
        />
        <label htmlFor="timerHr">h</label>
      </div>
      <div>
        <input 
          type="text" 
          name="timerMin" 
          className="timerInput" 
          id="timerMin" 
          placeholder='0' 
          onChange={handleMins}
          value={mins === '0' ? '' : mins}
        />
        <label htmlFor="timerMin">m</label>
      </div>
      <div>
        <input 
          type="text" 
          name="timerSec" 
          className="timerInput" 
          id="timerSec" 
          placeholder='0' 
          onChange={handleSecs}
          value={secs === '0' ? '' : secs}
        />
        <label htmlFor="timerSec">s</label>
      </div>
      <button type="submit">set workday</button>
    </form>
  );
}

export default TimerInput;