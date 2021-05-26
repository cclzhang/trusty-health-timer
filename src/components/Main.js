

import Display from './Display';
import './Main.css';

function Main() {
  return (
    <main>
      {/* time display */}
      <Display />
      <button>set timer</button>
      <button>play</button>
      <button>stop</button>
    </main>
  );
}

export default Main;
