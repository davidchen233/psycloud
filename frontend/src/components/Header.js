import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './header.css';
import { BsPerson, BsCart3 } from 'react-icons/bs';
const Header = () => {
  // TODO: 是否已登入
  const [signedin, setSignedin] = useState(false);

  const [sticky, setSticky] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });
  const [toggle, setToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const menuItems = ['壓力檢測', '預約心理師', '紓壓小物', '心情聊天室'];
  const menuLinks = {
    壓力檢測: 'test',
    預約心理師: 'doctor',
    紓壓小物: 'product',
    心情聊天室: 'chatRoom',
  };

  return (
    <header className={sticky ? 'sticky' : ''}>
      <NavLink
        to="/"
        className="logo"
        onClick={() => {
          setActiveIndex(-1);
        }}
      >
        <Logo />
      </NavLink>

      <nav>
        <ul className={`menu ${toggle ? 'active' : ''}`}>
          {menuItems.map((v, i) => {
            return (
              <li
                key={i}
                className={activeIndex === i ? 'active' : ''}
                onClick={() => {
                  setActiveIndex(i);
                }}
              >
                <NavLink to={`/${menuLinks[v]}`}>{v}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="other-nav">
        <li>
          <NavLink
            to={signedin ? '/profile' : '/auth'}
            onClick={() => {
              setActiveIndex(-1);
            }}
          >
            <BsPerson size="28" className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            onClick={() => {
              setActiveIndex(-1);
            }}
          >
            <BsCart3 size="26" />
          </NavLink>
        </li>
      </ul>
      <div
        className={`toggle ${toggle ? 'active' : ''}`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div className="bar mb-2"></div>
        <div className="bar"></div>
        <div className="bar mt-2"></div>
      </div>
    </header>
  );
};

export default Header;
