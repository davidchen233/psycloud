import { NavLink } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhoneAlt,
  FaHome,
  FaRegEnvelope,
} from 'react-icons/fa';
import './footer.css';
import Logo from './logo.png';
const Footer = () => {
  return (
    <footer>
      <div className="content d-lg-flex">
        <NavLink to="/">
          <img className="me-3" src={Logo} alt="" />
        </NavLink>
        <div className="formBox">
          <form>
            <h3>聯絡我們</h3>
            <input type="email" name="" placeholder="Email" />
            <textarea name="" placeholder="輸入您想說的話"></textarea>
            <input type="submit" value="送出" />
          </form>
        </div>

        <div className="links">
          <ul>
            <li className="mb-2">
              <FaPhoneAlt className="me-3 mb-2" /> 02-25154848
            </li>
            <li className="mb-2">
              <FaHome className="me-3 mb-2" /> 台北市萬華區安和路223巷26號3樓
            </li>
            <li>
              <FaRegEnvelope className="me-3" /> psycloud@gmail.com
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
      <div className="copyright">
        <p>Copyright &copy; 2021 心理雲. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
