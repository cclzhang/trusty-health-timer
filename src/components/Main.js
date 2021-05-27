

import Display from './Display';
import SetTimer from './SetTimer';
import './Main.css';

function Main() {
  return (
    <main>
      {/* time display */}
      <Display />
      <SetTimer />
      <button>set timer</button>
      <button>play</button>
      <button>stop</button>
    </main>
  );
}

export default Main;
