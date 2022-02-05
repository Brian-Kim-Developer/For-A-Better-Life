import Toggle from 'react-toggle';
import { connect } from 'react-redux';
import { toggleTheme } from '../../state/action-creators';
import { Theme } from '../../state/actions';

import ImageMoon from '../Images/ImageMoon';
import ImageSun from '../Images/ImageSun';

import "./Header.scss";

interface HeaderProps {
  theme: Theme,
  toggleTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({theme, toggleTheme}) => {
  return (
    <div className={`header-container ${theme}`}>
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

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleTheme: (theme: Theme) => dispatch(toggleTheme(theme)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);