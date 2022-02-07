import Toggle from 'react-toggle';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';

import ImageMoon from '../Images/ImageMoon';
import ImageSun from '../Images/ImageSun';

import "./Header.scss";

const Header: React.FC<any> = () => {

  const theme = useTypedSelector((state) => state.theme);
  const { toggleTheme } = useActions();

  return (
    <div className="header-container">
      <img className="logo" src={`img/logo_${theme}.png`} alt="Homepage Logo" />
      <label>
        <Toggle
          defaultChecked={theme === 'dark'}
          icons={{
            checked: <ImageMoon />,
            unchecked: <ImageSun />
          }}
          onChange={() => toggleTheme(theme)} />
      </label>
    </div>
  )
}

export default Header;