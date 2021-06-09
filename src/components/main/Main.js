
import useVisibilityToggle from '../../containers/useVisibilityToggle';
import StopBox from '../stop-box/StopBox';
import './Main.css';


function Main() {
  const [StopBoxComponent, toggleStopBoxVisibility] = useVisibilityToggle(
    <StopBox />
  );

  return (
    <main>
      <div>
        <p>00:00:00</p>
      </div>

      {/* input replaces div */}
      <input type="text" name="timer" id="timer"  placeholder="00:00:00" />
      <p></p>
      <label htmlFor="timer"></label>
      <p></p>

      {/* play/stop replaces set workday button */}
      <button>add workday</button>
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
