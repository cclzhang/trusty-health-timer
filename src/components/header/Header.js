

// import Info from '../info/Info';
// import Settings from '../settings/Settings';
import './Header.css';
import { useRef } from 'react';



const Header = () => {
  // const [showInfo, setShowInfo] = useState(false);
  const componentRef = useRef();
  
  console.log(componentRef.current);


  const infoHandler = () =>{
    console.log("info")
  }

  const settingsHandler = () => {
    console.log("settings")
  }
  return (
    <header>
      <a href="." className="logo">logo</a>
      <div>
        <button className="infoBtn" name="infoBtn" onClick={infoHandler}>i</button>
        <button className="settingsBtn" name="settingsBtn" onClick={settingsHandler}>s</button>
      </div>
    </header>
  );
}

export default Header;