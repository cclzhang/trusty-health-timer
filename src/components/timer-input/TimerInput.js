import './TimerInput.css';


function TimerInput({setHrs, hrs, setMins, mins, setSecs, secs, toggle, setHealthyBreak, setNewTimer}) {

  const hrsRegex = "^(1[0-6]|[1-9])$";
  const minsAndSecsRegex = "^[0-5]?[0-9]$";
  const handleHrs = (e) => {
    if (e.target.value.match(hrsRegex)) {
      setHrs(parseInt(e.target.value));
    }
    if (e.target.value === '') {
      setHrs('0');
    }
  }

  const handleMins = (e) => {
    if (e.target.value.match(minsAndSecsRegex)) {
      setMins(parseInt(e.target.value));
    }
    else if (e.target.value === '') {
      setMins('0');
    }
  }

  const handleSecs = (e) => {
    if (e.target.value.match(minsAndSecsRegex)) {
      setSecs(parseInt(e.target.value));
    }
    else if (e.target.value === '') {
      setSecs('0');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(hrs) * 3600 + parseInt(mins) * 60 + parseInt(secs) === 0) {
      return alert("please enter a time");
    }
    toggle();
    setHealthyBreak(parseInt(hrs)*3600 + parseInt(mins)*60 + parseInt(secs));
    setNewTimer(true);
  }

  return (
    <form className="timerInputBox" onSubmit={handleSubmit}>
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