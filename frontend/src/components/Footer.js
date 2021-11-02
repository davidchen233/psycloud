import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhoneAlt,
  FaHome,
} from 'react-icons/fa';
import './footer.css';
import Logo from './logo.png';
const Footer = () => {
  return (
    <footer>
      <div className="content d-lg-flex">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <div className="formBox">
          <form>
            <h3>聯絡我們</h3>
            <input type="email" name="" placeholder="Email" />
            <textarea name="" placeholder="Your Message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>

        <div className="links">
          <ul>
            <li>
              <FaPhoneAlt className="me-3 mb-2" /> 02-25154848
            </li>
            <li>
              <FaHome className="me-3 mb-2" /> 台北市萬華區安和路223巷26號3樓
            </li>
            <li>
              <FaPhoneAlt className="me-3" /> 02-25154848
            </li>
          </ul>
          <ul className="medias">
            <li>
              <a href="http://www.facebook.com">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bar  mt-2"></div>
      <div class="copyright">
        <p>Copyright &copy; 2021 心理雲. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
