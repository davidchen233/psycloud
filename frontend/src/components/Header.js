import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './header.css';
import { BsPerson, BsCart3 } from 'react-icons/bs';
const Header = () => {
  const [sticky, setSticky] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });
  return (
    <header className={sticky ? 'sticky' : ''}>
      <NavLink to="/" className="logo">
        <Logo />
      </NavLink>
      <div className="toggle"></div>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="home">壓力檢測</NavLink>
          </li>
          <li>
            <NavLink to="#about">預約心理師</NavLink>
          </li>
          <li>
            <NavLink to="#services">紓壓小物</NavLink>
          </li>
          <li>
            <NavLink to="#work">心情聊天室</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="home">
              <BsPerson size="28" />
            </NavLink>
          </li>
          <li>
            <NavLink to="home">
              <BsCart3 size="26" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
