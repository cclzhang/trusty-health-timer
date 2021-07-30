

import useVisibilityToggle from '../../containers/useVisibilityToggle';

import Info from './info/Info';
import Settings from './settings/Settings';

import './Header.css';



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
        <a href="." className="logo">Healthy Pomo</a>
      </h1>
      <nav>
        <ul>
          <li>
            <button className="infoBtn" name="infoBtn" onClick={
              SettingsComponent ? toggleInfoAndSettings : toggleInfoVisibility
            }>i</button>
          </li>
          <li>
            <button className="settingsBtn" name="settingsBtn" onClick={
              InfoComponent ? toggleInfoAndSettings : toggleSettingsVisibility
            }>s</button>
          </li>
        </ul>
      </nav>
      {InfoComponent}
      {SettingsComponent}
    </header>
  );
}

export default Header;