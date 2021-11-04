import './personal.css';
import Banner from './tempImg/banner.png';
import Avatar from './tempImg/avatar.jpg';

const Personal = () => {
  return (
    <>
      <div className="personal-banner">
        <img src={Banner} alt="" />
      </div>
      <div class="profile-box">
        <div class="editPhoto">
          <div class="photo">
            <img src={Avatar} alt="" />
          </div>
          <input type="file" />
        </div>
        <div class="account-box">
          <h3>神奇寶貝</h3>
          <p>
            會員帳號: <span>pokemon@gmail.com</span>
          </p>
          <p>
            密碼: <span>po******23 </span>
            <button>更改密碼</button>
          </p>
        </div>
        <div class="infos">
          <div class="row infoItem">
            <div class="col-3 itemTitle">姓名 :</div>
            <span class="col-9 itemValue">神奇寶貝</span>
          </div>
          <div class="row infoItem">
            <div class="col-3 itemTitle">Email :</div>
            <span class="col-9 itemValue">pokemon@gmail.com</span>
          </div>
          <div class="row infoItem">
            <div class="col-3 itemTitle">密碼 :</div>
            <span class="col-9 itemValue">pok*****123</span>
          </div>
          <div class="row infoItem">
            <div class="col-3 itemTitle">生日 :</div>
            <span class="col-9 itemValue">87-10-30</span>
          </div>
          <div class="row infoItem">
            <div class="col-3 itemTitle">電話 :</div>
            <span class="col-9 itemValue">0952147856</span>
          </div>
          <div class="row infoItem">
            <div class="col-3 itemTitle">地址 :</div>
            <span class="col-9 itemValue address">
              日本東京都港區六本木6-10-1 六本木新城森大廈18F
            </span>
          </div>
          <div class="d-flex justify-content-between">
            <div></div>
            <button class="edit-btn">編輯</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
