import './profile.css';
import Avatar from './tempImg/avatar.jpg';
import {
  FaRegUser,
  FaCalendarCheck,
  FaShoppingBag,
  FaTasks,
  FaUserMd,
} from 'react-icons/fa';
import Personal from './Personal';

const Profile = () => {
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
                <a href="/#">
                  <span className="iconBx">
                    <FaRegUser className="icon" />
                  </span>
                  <span className="title">個人資訊</span>
                </a>
              </li>
              <li className="list">
                <a href="/#">
                  <span className="iconBx">
                    <FaCalendarCheck className="icon" />
                  </span>
                  <span className="title">我的預約</span>
                </a>
              </li>
              <li className="list">
                <a href="/#">
                  <span className="iconBx">
                    <FaShoppingBag className="icon" />
                  </span>
                  <span className="title">我的訂單</span>
                </a>
              </li>
              <li className="list">
                <a href="/#">
                  <span className="iconBx">
                    <FaTasks className="icon" />
                  </span>
                  <span className="title">檢測結果</span>
                </a>
              </li>
              <li className="list">
                <a href="/#">
                  <span className="iconBx">
                    <FaUserMd className="icon" />
                  </span>
                  <span className="title">心理師專區</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Personal />
        </div>
      </div>
    </div>
  );
};

export default Profile;
