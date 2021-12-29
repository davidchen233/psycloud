import { useState, useContext } from 'react';
import { NavLink, withRouter, useHistory } from 'react-router-dom';
import Logo from './Logo';
import './header.css';
import { BsPerson, BsCart3 } from 'react-icons/bs';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import axios from 'axios';
import { API_URL } from '../config/config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { GlobalValues } from '../App';

const Header = () => {
  let globalValues = useContext(GlobalValues);
  // console.log('cartCount', globalValues.cartCount);

  const MySwal = withReactContent(Swal);
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
    壓力檢測: user ? 'test' : 'auth',
    預約心理師: 'doctor',
    紓壓小物: 'product',
    心情聊天室: 'chatRoom',
  };
  let history = useHistory();
  function handleLogout() {
    try {
      axios.get(`${API_URL}/auth/logout`, { withCredentials: true });
      // localStorage.removeItem('user');
      globalValues.setCartCount(0);
      localStorage.clear();
      localStorage.setItem('cart', '');
      MySwal.fire({ title: '登出成功', icon: 'success' }).then(() => {
        setActiveIndex(-1);
        history.push('/');
      });
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
                  setToggle(false);
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
            to={user ? '/cart' : '/auth'}
            onClick={() => {
              setActiveIndex(-1);
            }}
          >
            <div className="header-cart">
              {user ? (
                <div className="cartCount">{globalValues.cartCount}</div>
              ) : (
                ''
              )}
              <BsCart3 size="26" />
            </div>
          </NavLink>
        </li>
        {user ? (
          <li>
            <span className="logout" onClick={handleLogout}>
              <IoMdLogOut size="26" />
              <span className="ms-1">登出</span>
            </span>
          </li>
        ) : (
          <NavLink
            to="/auth"
            className="logouta"
            onClick={() => {
              setActiveIndex(-1);
            }}
          >
            <li>
              <span className="logout">
                <IoMdLogIn size="26" />
                <span className="ms-1">登入</span>
              </span>
            </li>
          </NavLink>
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
