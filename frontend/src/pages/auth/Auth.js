import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/config';
import './auth.css';

const Auth = () => {
  const [toggleForm, setToggleForm] = useState(false);

  // 登入表單開始 ===========================================
  const [loginResponse, setLoginResponse] = useState('');
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [loginErrors, setLoginErrors] = useState({
    email: '',
    password: '',
  });
  const handleLoginChange = (e) => {
    const updatedLoginForm = { ...loginForm, [e.target.name]: e.target.value };
    setLoginForm(updatedLoginForm);
  };
  const handleLoginFormInvalid = (e) => {
    e.preventDefault();
    const updatedLoginErrors = {
      ...loginErrors,
      [e.target.name]: e.target.validationMessage,
    };
    setLoginErrors(updatedLoginErrors);
  };
  const handleLoginFormChange = (e) => {
    const updatedLoginErrors = {
      ...loginErrors,
      [e.target.name]: '',
    };
    setLoginErrors(updatedLoginErrors);
  };
  async function handleLoginSubmit(e) {
    e.preventDefault();
    const res = await axios.post(`${API_URL}/auth/login`, loginForm);
    if (res.data.code !== 0) {
      setLoginResponse(res.data.message);
    } else {
      setLoginForm({
        email: '',
        password: '',
      });
      setLoginResponse('');
    }
  }
  // 登入表單結束 ===========================================

  // 註冊表單開始 ===========================================
  const [signupResponse, setSignupResponse] = useState('');
  const [signupForm, setSignupForm] = useState({
    name: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signupErrors, setSignupErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleSignupChange = (e) => {
    const updatedSignupForm = {
      ...signupForm,
      [e.target.name]: e.target.value,
    };
    setSignupForm(updatedSignupForm);
  };
  const handleSignupFormInvalid = (e) => {
    e.preventDefault();
    const updatedSignupErrors = {
      ...signupErrors,
      [e.target.name]: e.target.validationMessage,
    };
    setSignupErrors(updatedSignupErrors);
  };
  const handleSignupFormChange = (e) => {
    const updatedSignupErrors = {
      ...signupErrors,
      [e.target.name]: '',
    };
    setSignupErrors(updatedSignupErrors);
    setSignupResponse('');
  };
  async function handleSignupSubmit(e) {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      const updatedSignupErrors = {
        ...signupErrors,
        confirmPassword: '確認密碼與密碼欄位不相符',
      };
      setSignupErrors(updatedSignupErrors);
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/auth/signup`, signupForm);
      if (res.data.code !== 0) {
        setSignupResponse(res.data.message);
      } else {
        setSignupForm({
          name: '',
          gender: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setSignupResponse('');
        setToggleForm(false);
      }
    } catch (err) {
      console.log('handleSubmit err', err);
    }
  }
  // 註冊表單結束 ===========================================
  return (
    <div className="auth-wrapper">
      <div class={`authbox ${toggleForm ? 'active' : ''}`}>
        <div class="user signinBox">
          <div class="imgBox">
            <img src="/sources/signin.jpg" alt="" />
          </div>
          <div class="authFormBx">
            <form
              onSubmit={handleLoginSubmit}
              onChange={handleLoginFormChange}
              onInvalid={handleLoginFormInvalid}
            >
              <h2>使用者登入</h2>
              <input
                type="email"
                name="email"
                placeholder="請輸入帳號 Email"
                value={loginForm.email}
                onChange={handleLoginChange}
                required
              />
              {loginErrors.email !== '' && (
                <span className="errorMsg">{loginErrors.email}</span>
              )}
              <input
                type="password"
                name="password"
                placeholder="請輸入密碼"
                value={loginForm.password}
                onChange={handleLoginChange}
                minLength="8"
                required
              />
              {loginErrors.password !== '' && (
                <span className="errorMsg">{loginErrors.password}</span>
              )}
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
              <span className="errorMsg ps-0 fs-6">{loginResponse}</span>
              <div className="d-flex justify-content-between">
                <div></div>
                <input type="submit" value="登入" />
              </div>
            </form>
          </div>
        </div>
        <div class="user signupBox">
          <div class="authFormBx">
            <form
              onSubmit={handleSignupSubmit}
              onChange={handleSignupFormChange}
              onInvalid={handleSignupFormInvalid}
            >
              <h2>註冊新帳戶</h2>
              <input
                type="text"
                placeholder="姓名"
                name="name"
                value={signupForm.name}
                onChange={handleSignupChange}
                required
              />
              {signupErrors.name !== '' && (
                <span className="errorMsg">{signupErrors.name}</span>
              )}
              <div className="d-flex">
                <div className="gender me-4">
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    value={1}
                    checkedValue={signupForm.gender}
                    onChange={handleSignupChange}
                    required
                  />
                  <label htmlFor="male">男性</label>
                </div>
                <div className="gender">
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    value={2}
                    checkedValue={signupForm.gender}
                    onChange={handleSignupChange}
                    required
                  />
                  <label htmlFor="female">女性</label>
                </div>
                {signupErrors.gender !== '' && (
                  <span className="errorMsg ps-4">{signupErrors.gender}</span>
                )}
              </div>
              <input
                type="email"
                placeholder="使用者帳號 Email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupChange}
                required
              />
              {signupErrors.email !== '' && (
                <span className="errorMsg">{signupErrors.email}</span>
              )}
              <input
                type="password"
                placeholder="請輸入密碼"
                name="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                minLength="8"
                required
              />
              {signupErrors.password !== '' && (
                <span className="errorMsg">{signupErrors.password}</span>
              )}
              <input
                type="password"
                placeholder="重新輸入密碼"
                name="confirmPassword"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                required
              />
              {signupErrors.confirmPassword !== '' && (
                <span className="errorMsg">{signupErrors.confirmPassword}</span>
              )}
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
              <span className="errorMsg ps-0 fs-6">{signupResponse}</span>
              <div className="d-flex justify-content-between">
                <div></div>
                <input type="submit" value="確認註冊" />
              </div>
            </form>
          </div>
          <div class="imgBox">
            <img src="/sources/signup.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
