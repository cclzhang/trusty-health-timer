
import useVisibilityToggle from '../../containers/useVisibilityToggle';
import StopBox from '../stop-box/StopBox';
import TimerInput from '../timer-input/TimerInput';
import TimerDisplay from '../timer-display/TimerDisplay';
import './Main.css';



const Main = () => {
  const [StopBoxComponent, toggleStopBoxVisibility] = useVisibilityToggle(
    <StopBox />
  );

  const [InputComponent, toggleInputVisibility] = useVisibilityToggle(
    <TimerInput />
  );

  const [DisplayComponent, toggleDisplayVisibility] = useVisibilityToggle(
    <TimerDisplay />, 
    true
  );

  const toggleInputAndDisplay = () => {
    toggleInputVisibility();
    toggleDisplayVisibility();
  }

  return (
    <main>
      {DisplayComponent}
      {InputComponent}

      {/* play/stop replaces set workday button */}
      <button onClick={toggleInputAndDisplay}>add workday</button>
      <p></p>

      {/* replaces workday btn */}
      <button>play</button>
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
