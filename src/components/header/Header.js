

import useVisibilityToggle from '../../containers/useVisibilityToggle';

import Info from './info/Info';
import Settings from './settings/Settings';

import './Header.css';
import logo from '../../assets/images/lotus.png';
import { LightBulbIcon, GearIcon } from '@primer/octicons-react';



const Header = () => {

  const [InfoComponent, toggleInfoVisibility] = useVisibilityToggle(
    <Info />
  );

  const [SettingsComponent, toggleSettingsVisibility] = useVisibilityToggle(
    <Settings />
  );

  const toggleInfoAndSettings = () => {
    toggleInfoVisibility();
    toggleSettingsVisibility();
  }

  return (
    <header>
      <h1>
        <a href="." className="logo">
          <img src={logo} alt="lotus logo" />
          healthpomo
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <button className="infoBtn" name="infoBtn" onClick={
              SettingsComponent ? toggleInfoAndSettings : toggleInfoVisibility
            }><LightBulbIcon size={16} /></button>
          </li>
          <li>
            <button className="settingsBtn" name="settingsBtn" onClick={
              InfoComponent ? toggleInfoAndSettings : toggleSettingsVisibility
            }><GearIcon size={16} /></button>
          </li>
        </ul>
      </nav>
      {InfoComponent}
      {SettingsComponent}
    </header>
  );
}

export default Header;