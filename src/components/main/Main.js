
import useVisibilityToggle from '../../containers/useVisibilityToggle';
import Counter from '../../containers/Counter';
import StopBox from '../stop-box/StopBox';
import TimerInput from '../timer-input/TimerInput';
import TimerDisplay from '../timer-display/TimerDisplay';
import './Main.css';
import { useState } from 'react';



const Main = () => {
  const [timer, setTimer] = useState('00:00:00');
  const [toggleInput, setToggleInput] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);

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

  const togglePlayPause = () => {
    togglePlay();
    togglePause();
  }

  let isPaused = false;

  const handlePlay = () => {
    let newHrs = parseInt(hrs);
    let newMins = parseInt(mins);
    let newSecs = parseInt(secs);
    

    const interval = setInterval(()=>{
      
      // timer
      // if new seconds > 0
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
  
      // if everything is 0
      if ((newSecs + newMins + newHrs) === 0) {
        console.log("done!");
        clearInterval(interval);
      }
    }, 1000)

  }

  const handlePause = () =>{
    // if(!isPaused) {
    //   isPaused = true;
    // }
    // clearInterval(interval);
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

  const [play, togglePlay] = useVisibilityToggle(
    <button onClick={()=>{
      // setIsPaused(true);
      handlePlay();
      togglePlayPause();
      // console.log(isPaused);
    }}>play</button>,
    true
  );

  const [pause, togglePause] = useVisibilityToggle(
    <button onClick={()=>{
      handlePause();
      togglePlayPause();
      console.log(isPaused);
    }}>pause</button>
  );


  return (
    <main>
      {DisplayComponent}
      {InputComponent}

      {/* play/stop replaces set workday button */}
      {toggleInput ? null : <button onClick={addWorkdayToggle}>add workday</button>}

      <p></p>

      {/* replaces workday btn */}

      {/* <button onClick={handlePlay}>play</button> */}
      {play ? play : pause}
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
