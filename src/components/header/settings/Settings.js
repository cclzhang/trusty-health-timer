

import './Settings.css';
import { useState } from 'react';
import PomodoroSettings from './PomodoroSettings';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [isBreakAlert, setIsBreakAlert] = useState(true);
  const [isAutoBreak, setIsAutoBreak] = useState(true);
  const [isAutoPomo, setIsAutoPomo] = useState(true);
  const [isStandardWorkday, setIsStandardWorkday] = useState(true);

  const buttonHandler = (e, setButtonState, buttonState) => {
    e.preventDefault();
    setButtonState(!buttonState);
  }

  return (
    <form action="" id="settings" className="popUp">
      <h3>i am settings</h3>
      <ul>
        <li>
          <label htmlFor="dark-mode">dark mode</label>
          <button 
            aria-labelledby="dark-mode" 
            role="switch" aria-checked="true" 
            onClick={e => buttonHandler(e, setIsDarkMode, isDarkMode)}
          >
            <span>on</span>
            <span>off</span>
          </button>
        </li>
        <li>
          <label htmlFor="break-music">play music on break</label>
          <button 
            aria-labelledby="break-music" 
            role="switch" 
            aria-checked="true" 
            onClick={e => buttonHandler(e, setIsPlayingMusic, isPlayingMusic)}
          >
            <span>on</span>
            <span>off</span>
          </button>
        </li>
        <li>
          <label htmlFor="break-alert">alert on break</label>
          <button 
            aria-labelledby="break-alert" 
            role="switch" 
            aria-checked="false" 
            onClick={e => buttonHandler(e, setIsBreakAlert, isBreakAlert)}
          >
            <span>on</span>
            <span>off</span>
          </button>
        </li>
        <li>
          <label htmlFor="autostart-break">autostart break</label>
          <button 
            aria-labelledby="autostart-break" 
            role="switch" 
            aria-checked="true" 
            onClick={e => buttonHandler(e, setIsAutoBreak, isAutoBreak)}
          >
            <span>on</span>
            <span>off</span>
          </button>
        </li>
        <li>
          <label htmlFor="autostart-pomo">autostart pomo</label>
          <button 
            aria-labelledby="autostart-pomo" 
            role="switch" 
            aria-checked="true" 
            onClick={e => buttonHandler(e, setIsAutoPomo, isAutoPomo)}
          >
            <span>on</span>
            <span>off</span>
          </button>
        </li>
        <PomodoroSettings />
        <li>
          <button 
            aria-labelledby="autostart-pomo" 
            role="switch" 
            aria-checked="true" 
            onClick={e => buttonHandler(e, setIsStandardWorkday, isStandardWorkday)}
          >
            {isStandardWorkday ? "workday = pomos + break" : "workday = pomo only"}
          </button>
        </li>
      </ul>

      <button type="submit" onClick={e => e.preventDefault()}>ok</button>
    </form>
  );
}

export default Settings;