
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';
import { useEffect, useState } from 'react';


const today = new Date();
let currentTime = today.toLocaleTimeString('en-GB');
console.log(today.toLocaleTimeString('en-GB'));
console.log(today.toLocaleTimeString());

function App() {
  const [clockHr, setClockHr] = useState(new Date().getHours());
  const [clockMin, setClockMin] = useState(new Date().getMinutes());

  useEffect(() => {
    let interval = null;
    interval = setInterval(() =>{
      if (new Date().getHours() < 10) {
        setClockHr(`0${new Date().getHours()}`);
      } else {
        setClockHr(new Date().getHours());
      }

      if (new Date().getMinutes() < 10) {
        setClockMin(`0${new Date().getMinutes()}`);
      } else {
        setClockMin(new Date().getMinutes());
      }

    }, 1000)
    return (()=> clearInterval(interval))
  }, [clockMin, clockHr])
  return (
    <div className="App">
      <Header />
      <Main />
      <aside>
        <p className="time">{`${clockHr}:${clockMin}`}</p>
      </aside>
      <footer>
        <p>&copy; 2021 <a href="http://cecilezhang.com">xixi</a></p>
      </footer>
    </div>
  );
}

export default App;
