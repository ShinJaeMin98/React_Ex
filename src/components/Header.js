import { useState } from 'react';
import styles from '../styles/header.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cn('header')}>
      <button type="button" className={cn('red', { isActive })}>
        로그인
      </button>
      <button type="button">회원가입</button>
      <button type="button" onClick={() => setIsActive(!isActive)}>
        Toggle
      </button>
    </div>
  );
};

export default Header;