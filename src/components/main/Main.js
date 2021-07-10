import { useEffect, useState } from 'react';

import useVisibilityToggle from '../../containers/useVisibilityToggle';
import StopBox from '../stop-box/StopBox';
import TimerInput from '../timer-input/TimerInput';
import TimerDisplay from '../timer-display/TimerDisplay';
import Player from '../../containers/Player';

import './Main.css';




const Main = () => {
  const [toggleInput, setToggleInput] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [hrs, setHrs] = useState('0');
  const [mins, setMins] = useState('0');
  const [secs, setSecs] = useState('0');

  const [healthyBreak, setHealthyBreak] = useState(0);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakType, setBreakType] = useState('');

  const toggleInputAndDisplay = () => {
    toggleInputVisibility();
    toggleDisplayVisibility();
  }

  const addWorkdayToggle = () => {
    toggleInputAndDisplay();
    setToggleInput(true);
  }

  const reset = () => {
    setSecs(0);
    setMins(0);
    setHrs(0);
    setIsActive(false);
  }

  const [StopBoxComponent, toggleStopBoxVisibility] = useVisibilityToggle(
    <StopBox />
  );

  const [InputComponent, toggleInputVisibility] = useVisibilityToggle(
    <TimerInput 
      hrs={hrs}
      setHrs={setHrs}
      mins={mins}
      setMins={setMins}
      secs={secs}
      setSecs={setSecs}
      toggle={toggleInputAndDisplay}
      setHealthyBreak={setHealthyBreak}
    />
  );

  const [DisplayComponent, toggleDisplayVisibility] = useVisibilityToggle(
    <TimerDisplay 
      hrs={hrs}
      mins={mins}
      secs={secs}
    />,
    true
  );

  useEffect(() => {
    let newHrs = parseInt(hrs);
    let newMins = parseInt(mins);
    let newSecs = parseInt(secs);
    let counter = newSecs + (newMins * 60) + (newHrs * 3600) - 1;

    let interval = null;
    
    if (isActive) {
      interval = setInterval(()=>{
        if ((healthyBreak - counter) % 540 === 0 && counter > 10) {
          // and counter is bigger than 1h 30mins
          setIsActive(!isActive);
          setIsOnBreak(true);
          setBreakType('long');
        } else if ((healthyBreak - counter) % 180 === 0 && counter > 10) {
          // and counter is bigger than 30mins
          setIsActive(!isActive);
          setIsOnBreak(true);
          setBreakType('short');
        }
        // clear interval when timer reaches zero
        if (newSecs + newMins + newHrs === 0) {
          setIsActive(!isActive);
        } else if (newSecs > 0) {
          newSecs--;
          setSecs(newSecs);
        } else {
          // new seconds === 0 and newMins > 0
          if (newMins > 0) {
            newMins--;
            setMins(newMins);
            newSecs = 59;
            setSecs(newSecs);
          } else {
            // if newMins === 0 and newHrs > 0
            if (newHrs > 0) {
              newHrs--;
              setHrs(newHrs);
              newMins = 59;
              newSecs = 59;
              setMins(newMins);
              setSecs(newSecs);
            }
          }
        } 
      }, 1000)
    } else if (!isActive && !(newSecs + newMins + newHrs === 0)) {
      // when pause is clicked, stop interval
      clearInterval(interval);
    } 
    return () => clearInterval(interval);
  }, [hrs, mins, secs, isActive, isOnBreak, healthyBreak]);

  return (
    <main>
      {DisplayComponent}
      {InputComponent}

      {/* play/stop replaces set workday button */}
      {toggleInput ? null : <button onClick={addWorkdayToggle}>add workday</button>}

      <p></p>

      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'pause' : 'play'}
      </button>
      <button onClick={reset}>stop</button>

      {StopBoxComponent}

      {/* music player popup when timer ends*/}
      {isOnBreak 
        ? <Player
          isOnBreak={isOnBreak}
          setIsOnBreak={setIsOnBreak}
          type={breakType}
          setIsActive={setIsActive}
        />
        : null
      }

    </main>
  );
}

export default Main;
