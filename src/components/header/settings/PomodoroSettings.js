
import { useState } from "react";

const PomodoroSettings = () => {

  return(
    <li>
      <p>pomodoro settings</p>
      <ul>
        <li>
          <input type="text" name="pomoLength" id="pomoLength" disabled />
          <label htmlFor="pomoLength">Pomo Length</label>
        </li>
        <li>
          <input type="text" name="shortBreakLength" id="shortBreakLength" disabled />
          <label htmlFor="shortBreakLength">Short Break Length</label>
        </li>
        <li>
          <input type="text" name="longBreakLength" id="longBreakLength" disabled />
          <label htmlFor="longBreakLength">Long Break Length</label>
        </li>
        <li>
          <input type="text" name="longBreakInterval" id="longBreakInterval" disabled />
          <label htmlFor="longBreakInterval">Long Break Interval</label>
        </li>
      </ul>
    </li>
  )
}


export default PomodoroSettings;