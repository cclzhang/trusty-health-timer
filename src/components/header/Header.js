

import '../info/Info';
import '../settings/Settings';
import './Header.css';


function Header() {

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