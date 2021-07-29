
import { useState } from "react";

const PomodoroSettings = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return(
    <form>
      <p>pomodoro settings</p>

      <input type="text" name="pomoLength" id="pomoLength" />
      <label htmlFor="pomoLength">Pomodoro Length</label>

      <input type="text" name="breakLength" id="breakLength" />
      <label htmlFor="breakLength">Break Length</label>

      <input type="text" name="numOfPomos" id="numOfPomos" />
      <label htmlFor="numOfPomos">Number of Pomodoro Sessions</label>
    </form>
  )
}


export default PomodoroSettings;