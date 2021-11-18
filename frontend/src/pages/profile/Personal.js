import './personal.css';
import { HiOutlinePhotograph } from 'react-icons/hi';

import Banner from './tempImg/banner.png';
import Avatar from './tempImg/avatar.jpg';

const Personal = ({ togglePwdModal, togglePersonalModal }) => {
  return (
    <>
      <div className="personal-banner">
        <img src={Banner} alt="" />
      </div>
      <label className="upload-banner">
        <HiOutlinePhotograph size="30" />
        <input type="file" name="myfile" className="d-none" />
      </label>
      <div className="profile-box">
        <div className="editPhoto">
          <div className="photo">
            <img src={Avatar} alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <label className="upload-avatar">
              更換頭貼
              <input type="file" name="myfile" className="d-none" />
            </label>
          </div>
        </div>
        <div className="account-box">
          <h3>神奇寶貝</h3>
          <p>
            會員帳號: <span>pokemon@gmail.com</span>
            <button onClick={openPwdModal}>更改密碼</button>
          </p>
        </div>
        <div className="infos">
          <div className="row infoItem">
            <div className="col-3 itemTitle">姓名 :</div>
            <span className="col-9 itemValue">神奇寶貝</span>
          </div>
          <div className="row infoItem">
            <div className="col-3 itemTitle">Email :</div>
            <span className="col-9 itemValue">pokemon@gmail.com</span>
          </div>
          <div className="row infoItem mb-4">
            <div className="col-3 itemTitle">生日 :</div>
            <span className="col-9 itemValue">87-10-30</span>
          </div>
          <div className="d-flex justify-content-between">
            <div></div>
            <button className="edit-btn" onClick={togglePersonalModal}>
              編輯
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
