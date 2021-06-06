

// import { useRef } from 'react';
import useVisibilityToggle from '../../containers/useVisibilityToggle';

import Info from '../info/Info';
import Settings from '../settings/Settings';

import './Header.css';



const Header = () => {

  const [InfoComponent, toggleInfoVisibility] = useVisibilityToggle(
    <Info />
  );

  const [SettingsComponent, toggleSettingsVisibility] = useVisibilityToggle(
    <Settings />
  );

  // const componentRef = useRef();
  
  // console.log(componentRef.current);

  return (
    <header>
      <a href="." className="logo">logo</a>
      <div>
        <button className="infoBtn" name="infoBtn" onClick={toggleInfoVisibility}>i</button>
        <button className="settingsBtn" name="settingsBtn" onClick={toggleSettingsVisibility}>s</button>
      </div>
      {InfoComponent}
      {SettingsComponent}
    </header>
  );
}

export default Header;