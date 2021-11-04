import { Link } from 'react-router-dom';
import Avatar from './tempImg/avatar.jpg';
import {
  FaRegUser,
  FaCalendarCheck,
  FaShoppingBag,
  FaTasks,
  FaUserMd,
} from 'react-icons/fa';
import './profile.css';

const Profile = (props) => {
  return (
    <div className="container pt-4">
      <h2 className="text-center mb-3">會員專區</h2>
      <div className="profile-template">
        <div>
          <div className="navigation">
            <div className="avatar">
              <img src={Avatar} alt="" />
            </div>
            <ul>
              <li className="list active">
                <Link to="/u-profile">
                  <span className="iconBx">
                    <FaRegUser className="icon" />
                  </span>
                  <span className="title">個人資訊</span>
                </Link>
              </li>
              <li className="list">
                <Link to="/u-consultation">
                  <span className="iconBx">
                    <FaCalendarCheck className="icon" />
                  </span>
                  <span className="title">我的預約</span>
                </Link>
              </li>
              <li className="list">
                <Link to="/u-orders">
                  <span className="iconBx">
                    <FaShoppingBag className="icon" />
                  </span>
                  <span className="title">我的訂單</span>
                </Link>
              </li>
              <li className="list">
                <Link to="/u-test-result">
                  <span className="iconBx">
                    <FaTasks className="icon" />
                  </span>
                  <span className="title">檢測結果</span>
                </Link>
              </li>
              <li className="list">
                <Link to="/u-psychologist">
                  <span className="iconBx">
                    <FaUserMd className="icon" />
                  </span>
                  <span className="title">心理師專區</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Profile;
