//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
  return (
    <header>
      <NavLink
        to="/login"
        className={({ isActive }) => classNames({ isActive })}
      >
        로그인
      </NavLink>
      <NavLink
        to="/join"
        className={({ isActive }) => classNames({ isActive })}
      >
        회원가입
      </NavLink>
    </header>
  );
};

export default Header;