import { useState } from 'react';
import { NavLink, withRouter, useHistory } from 'react-router-dom';
import Logo from './Logo';
import './header.css';
import { BsPerson, BsCart3 } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../config/config';
const Header = () => {
  // TODO: 是否已登入
  let user = JSON.parse(localStorage.getItem('user'));

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
  let history = useHistory();
  function handleLogout() {
    try {
      axios.get(`${API_URL}/auth/logout`, { withCredentials: true });
      localStorage.removeItem('user');
      alert('登出成功');
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }
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
            to={user ? '/profile' : '/auth'}
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
        {user ? (
          <li>
            <span className="logout" onClick={handleLogout}>
              登出
            </span>
          </li>
        ) : (
          ''
        )}
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

export default withRouter(Header);
