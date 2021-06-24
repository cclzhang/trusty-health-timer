
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
      setClockHr(new Date().getHours());
      setClockMin(new Date().getMinutes());
      // console.log(new Date().getSeconds());
    }, 1000)
    return (()=> clearInterval(interval))
  })
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
