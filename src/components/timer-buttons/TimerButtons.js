


const TimerButtons = ({isActive, setIsActive, reset}) => (
  <div>
    <button onClick={() => setIsActive(!isActive)}>
      {isActive ? 'pause' : 'play'}
    </button>
    <button onClick={reset}>stop</button>
  </div>
)

export default TimerButtons;