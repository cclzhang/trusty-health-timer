
import useVisibilityToggle from '../../containers/useVisibilityToggle';
import StopBox from '../stop-box/StopBox';
import TimerInput from '../timer-input/TimerInput';
import TimerDisplay from '../timer-display/TimerDisplay';
import './Main.css';
import { useState } from 'react';



const Main = () => {
  const [timer, setTimer] = useState('00:00:00');
  const [toggleInput, setToggleInput] = useState(false);

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

  const [countdown, setCountdown] = useState(timer);

  const handlePlay = () => {

  }


  const [StopBoxComponent, toggleStopBoxVisibility] = useVisibilityToggle(
    <StopBox />
  );

  const [InputComponent, toggleInputVisibility] = useVisibilityToggle(
    <TimerInput 
      setTimer={setTimer} 
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
    <TimerDisplay timer={timer}/>, 
    true
  );


  return (
    <main>
      {DisplayComponent}
      {InputComponent}

      {/* play/stop replaces set workday button */}
      {toggleInput ? null : <button onClick={addWorkdayToggle}>add workday</button>}

      <p></p>

      {/* replaces workday btn */}

      <button onClick={handlePlay}>play</button>
      <button onClick={toggleStopBoxVisibility}>stop</button>
      {StopBoxComponent}

      {/* music player popup when timer ends*/}
      <div>
        <p>music player</p>
      </div>
    </main>
  );
}

export default Main;
