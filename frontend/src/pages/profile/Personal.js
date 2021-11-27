import './personal.css';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { PUBLIC_URL, API_URL } from '../../config/config';
import axios from 'axios';
import { useState } from 'react';

const Personal = ({ togglePwdModal, togglePersonalModal, setAvatar }) => {
  let user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  const [displayUser, setDisplayUser] = useState(user);

  // 上傳照片
  const handleUploadAvatar = async (e) => {
    try {
      let formData = new FormData();
      formData.append('avatar', e.target.files[0]);
      let res = await axios.post(`${API_URL}/users/uploadAvatar`, formData, {
        withCredentials: true,
      });
      console.log(res.data.avatar);
      // 存到 local storage
      user.avatar = res.data.avatar;
      localStorage.setItem('user', JSON.stringify(user));
      setDisplayUser(user);
      setAvatar(res.data.avatar);
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: 上傳 BANNER
  const handleUploadBanner = async (e) => {
    try {
      let formData = new FormData();
      formData.append('banner', e.target.files[0]);
      let res = await axios.post(`${API_URL}/users/uploadBanner`, formData, {
        withCredentials: true,
      });
      console.log(res.data.banner);
      // 存到 local storage
      user.banner = res.data.banner;
      localStorage.setItem('user', JSON.stringify(user));
      setDisplayUser(user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="personal-banner">
        <img src={PUBLIC_URL + displayUser.banner} alt="" />
      </div>
      <label className="upload-banner">
        <HiOutlinePhotograph size="30" />
        <input
          type="file"
          name="banner"
          className="d-none"
          onChange={handleUploadBanner}
        />
      </label>
      <div className="profile-box">
        <div className="editPhoto">
          <div className="photo">
            <img src={PUBLIC_URL + displayUser.avatar} alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <label className="upload-avatar">
              更換頭貼
              <input
                type="file"
                name="avatar"
                className="d-none"
                onChange={handleUploadAvatar}
              />
            </label>
          </div>
        </div>
        <div className="account-box">
          <h3>{displayUser.name}</h3>
          <p>
            會員帳號: <span>{displayUser.email}</span>
            <button onClick={togglePwdModal}>更改密碼</button>
          </p>
        </div>
        <div className="infos">
          <div className="row infoItem">
            <div className="col-3 itemTitle">姓名 :</div>
            <span className="col-9 itemValue">{displayUser.name}</span>
          </div>
          <div className="row infoItem">
            <div className="col-3 itemTitle">Email :</div>
            <span className="col-9 itemValue">{displayUser.email}</span>
          </div>
          <div className="row infoItem mb-4">
            <div className="col-3 itemTitle">生日 :</div>
            <span className="col-9 itemValue">
              {displayUser.birth ? displayUser.birth : '---未填寫---'}
            </span>
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
