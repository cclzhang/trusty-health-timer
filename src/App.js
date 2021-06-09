
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';


const today = new Date();
let currentTime = today.toLocaleTimeString('en-GB');
console.log(today.toLocaleTimeString('en-GB'));
console.log(today.toLocaleTimeString());

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <aside>
        <p className="time">{currentTime}</p>
      </aside>
      <footer>
        <p>&copy; 2021 <a href="http://cecilezhang.com">xixi</a></p>
      </footer>
    </div>
  );
}

export default App;
