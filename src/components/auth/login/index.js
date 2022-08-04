import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { loginState, userState } from '../../../store/atom';

import './Login.css';
import authAPI from './../../../apis/authAPI';
import PATH from './../../../constants/path';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    postLoginData();
  };

  const onKeyPress = e => {
    e.key === 'Enter' && onClickLogin();
  };

  async function postLoginData() {
    // try {
    //   await axios
    //     .post(
    //       'http://127.0.0.1:8000/account/login',
    //       { username: inputId, password: inputPw },
    //       {
    //         withCredentials: true,
    //       }
    //     )
    //     .then(res => {
    //       console.log(res.data);
    //       window.localStorage.setItem('loginId', res.data.token);

    //       setLogin(res.data);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
    // setInput({ username: inputId, password: inputPw });
    try {
      const input = { username: inputId, password: inputPw };
      const data = await authAPI.login({ input });
      setLogin({ isLogin: true, accessToken: data.token });
      setUser({ nickname: data.nickname });
      setTimeout(navigate(-1), 1000);
    } catch (error) {
      console.log('로그인 오류');
    }
  }

  return (
    <div className="container">
      <div className="login_box">
        <p className="title">Log In</p>
        <div className="login_type_area">
          <div className="id_box">
            <p htmlFor="input_pw">Username</p>
            <input
              type="text"
              name="input_id"
              placeholder="Enter Username"
              value={inputId}
              onChange={handleInputId}
              minLength="4"
            />
          </div>
          <div className="pw_box">
            <p htmlFor="input_pw">Password</p>
            <input
              type="password"
              name="input_pw"
              placeholder="Enter Password"
              value={inputPw}
              onChange={handleInputPw}
              onKeyPress={onKeyPress}
              minLength="8"
              className="pw_input"
            />
          </div>
        </div>
        <button className="login_btn" onClick={onClickLogin} type="button">
          Sign In
        </button>
        <Link to="/register">
          <p className="register_link">
            <span>계정이 없는 신규사용자는 </span>Sign Up
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
