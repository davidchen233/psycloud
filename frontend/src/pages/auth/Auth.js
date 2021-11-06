import { useState } from 'react';
import './auth.css';
import SigninImg from './signin.jpg';
import SignupImg from './signup.jpeg';

const Auth = () => {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="auth-wrapper">
      <div class={`authbox ${toggleForm ? 'active' : ''}`}>
        <div class="user signinBox">
          <div class="imgBox">
            <img src={SignupImg} alt="" />
          </div>
          <div class="authFormBx">
            <form>
              <h2>使用者登入</h2>
              <input type="text" placeholder="請輸入帳號 Email" />
              <input type="password" placeholder="請輸入密碼" />
              <p class="signup">
                還沒有帳號?
                <span
                  onClick={() => {
                    setToggleForm(true);
                  }}
                >
                  馬上註冊...
                </span>
              </p>
              <div className="d-flex justify-content-between">
                <div></div>
                <input type="submit" value="登入" />
              </div>
            </form>
          </div>
        </div>
        <div class="user signupBox">
          <div class="authFormBx">
            <form>
              <h2>註冊新帳戶</h2>
              <input type="text" placeholder="姓名" />
              <div className="d-flex">
                <div className="gender me-4">
                  <input id="male" type="radio" name="gender" />
                  <label htmlFor="male">男性</label>
                </div>
                <div className="gender">
                  <input id="female" type="radio" name="gender" />
                  <label htmlFor="female">女性</label>
                </div>
              </div>
              <input type="email" placeholder="使用者帳號 Email" />
              <input type="password" placeholder="請輸入密碼" />
              <input type="password" placeholder="重新輸入密碼" />
              <input type="text" placeholder="輸入手機號碼" />
              <label className="me-4">輸入出生年月日 :</label>
              <input className="w-50" type="date" />
              <p class="signupPsy">
                想註冊成為線上心理師?
                <span>前往註冊</span>
              </p>
              <p class="signup">
                已經有帳號了?
                <span
                  onClick={() => {
                    setToggleForm(false);
                  }}
                >
                  馬上登入
                </span>
              </p>
              <div className="d-flex justify-content-between">
                <div></div>
                <input type="submit" value="確認註冊" />
              </div>
            </form>
          </div>
          <div class="imgBox">
            <img src={SigninImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
