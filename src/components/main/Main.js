

// import Display from './Display';
// import SetTimer from './SetTimer';

// import React, { useRef } from 'react';
// import Info from '../info/Info';
import './Main.css';


const today = new Date();
let currentTime = today.toLocaleTimeString('en-GB');
console.log(today.toLocaleTimeString('en-GB'));
console.log(today.toLocaleTimeString());

function Main() {


  return (
    <main>
      <div>
        <p>00:00:00</p>
      </div>

      {/* input replaces div */}
      <input type="text" name="timer" id="timer"  placeholder="00:00:00" />
      <label htmlFor="timer">enter time</label>
      <p></p>

      {/* play/stop replaces set workday button */}
      <button>set workday</button>
      <p></p>
      <button>play</button>
      <button>stop</button>

      {/* music player popup when timer ends*/}
      <div>
        <p>music player</p>
      </div>

      {/* <Info /> */}

      <p className="time">{currentTime}</p>
    </main>
  );
}

export default Main;
