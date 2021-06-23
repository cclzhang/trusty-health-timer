
import useVisibilityToggle from '../../containers/useVisibilityToggle';
import Counter from '../../containers/Counter';
import StopBox from '../stop-box/StopBox';
import TimerInput from '../timer-input/TimerInput';
import TimerDisplay from '../timer-display/TimerDisplay';
import './Main.css';
import { useEffect, useState } from 'react';



const Main = () => {
  const [toggleInput, setToggleInput] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [hrs, setHrs] = useState('0');
  const [mins, setMins] = useState('0');
  const [secs, setSecs] = useState('0');

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

    let interval = null;
    
    if (isActive) {
      if (newSecs + newMins + newHrs === 0) {
        console.log('done');
        clearInterval(interval);
      }
      interval = setInterval(()=>{
        if (newSecs > 0) {
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
        console.log(newSecs);
      }, 1000)
    } else if (!isActive && !(newSecs + newMins + newHrs === 0)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <main>
      {DisplayComponent}
      {InputComponent}

      {/* play/stop replaces set workday button */}
      {toggleInput ? null : <button onClick={addWorkdayToggle}>add workday</button>}

      <p></p>

      {/* replaces workday btn */}

      <button onClick={() => setIsActive(!isActive)}>play</button>
      <button onClick={reset}>stop</button>

      {StopBoxComponent}

      {/* music player popup when timer ends*/}
      <div>
        <p>music player</p>
      </div>
    </main>
  );
}

export default Main;
