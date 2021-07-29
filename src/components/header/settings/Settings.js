

import './Settings.css';
import { useState } from 'react';
import PomodoroSettings from './PomodoroSettings';

const Settings = () => {
  const [isHealthTimer, setIsHealthTimer] = useState(true);

  return (
    <section id="settings" className="popUp">
      <p>i am settings</p>
      <ul>
        <li>
          <p>dark mode</p>
          <button>
            <span>on</span>
            <span>off</span>
          </button>
        </li>
        <li>
          <p>play music on break</p>
          <button>
            <span>on</span>
            <span>off</span>
          </button>
        </li>
        <li>
          <p>autostart break</p>
          <button>
            <span>on</span>
            <span>off</span>
          </button>
        </li>
        <li>
          <span id="autostart-pomo">autostart pomo</span>
          <button aria-labelledby="autostart-pomo" role="switch" aria-checked="true">
            <span>on</span>
            <span>off</span>
          </button>
        </li>
      </ul>
      <button>
        switch to
        {isHealthTimer ? ' pomodoro' : ' healthTimer'}
      </button>
      {isHealthTimer ? <PomodoroSettings /> : <PomodoroSettings />}

    </section>
  );
}

export default Settings;