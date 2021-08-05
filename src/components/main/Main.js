import { useEffect, useState } from 'react';

import useVisibilityToggle from '../../containers/useVisibilityToggle';
import StopBox from '../stop-box/StopBox';
import TimerInput from '../timer-input/TimerInput';
import TimerDisplay from '../timer-display/TimerDisplay';
import Player from '../../containers/Player';
import TimerButtons from '../timer-buttons/TimerButtons';

import './Main.css';




const Main = () => {
  const [toggleInput, setToggleInput] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [newTimer, setNewTimer] = useState(false);

  const [hrs, setHrs] = useState('0');
  const [mins, setMins] = useState('0');
  const [secs, setSecs] = useState('0');

  const [healthyBreak, setHealthyBreak] = useState(0);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakType, setBreakType] = useState('');

  const [breakLengthShort, setbreakLengthShort] = useState(20);
  const [breakLengthLong, setbreakLengthLong] = useState(120);
  const [longBreakInterval, setLongBreakInterval] = useState(3);
  const [pomoLength, setPomoLength] = useState(2);


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
    setToggleInput(false);
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
      setNewTimer={setNewTimer}
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
        if ((healthyBreak - counter) % (pomoLength * longBreakInterval) === 0 && counter > ((pomoLength * longBreakInterval) * 1.5)) {
          // break every hour and counter is bigger than 1h 30mins
          console.log((pomoLength * longBreakInterval) * 1.5, counter);
          setBreakType('long');
          setIsActive(!isActive);
          setIsOnBreak(true);
        } else if ((healthyBreak - counter) % pomoLength === 0 && counter > (pomoLength * 1.5)) {
          // break every 20mins and counter is bigger than 30mins
          setBreakType('short');
          setIsActive(!isActive);
          setIsOnBreak(true);
        }
        // clear interval when timer reaches zero
        if (newSecs + newMins + newHrs === 0) {
          setIsActive(!isActive);
          setToggleInput(false);
          setNewTimer(false);
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

      {isOnBreak
        ? <Player
          isOnBreak={isOnBreak}
          setIsOnBreak={setIsOnBreak}
          type={breakType}
          setIsActive={setIsActive}
          breakLengthShort={breakLengthShort}
          breakLengthLong={breakLengthLong}
        />
        : null
      }

      {!isOnBreak && newTimer
        ? <TimerButtons
          isActive={isActive}
          setIsActive={setIsActive}
          reset={reset}
        />
        : null
      }

      {StopBoxComponent}

      {/* music player popup when timer ends*/}

    </main>
  );
}

export default Main;
