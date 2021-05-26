
import Info from './components/Info';
import Main from  './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <aside>
        <Info />
        <button onClick={() => { 
          const info = document.getElementById("info");
          info.classList.toggle("invisible");
        }}>info</button>
      </aside>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
