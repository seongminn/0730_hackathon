import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../../atom';
import './Login.css';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const [login, setLogin] = useRecoilState(loginState);

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = event => {
    setInputPw(event.target.value);
  };

  const onClickLogin = () => {
    postLoginData();
  };

  const onKeyPress = e => {
    e.key === 'Enter' && onClickLogin();
  };

  async function postLoginData() {
    try {
      await axios
        .post(
          'http://127.0.0.1:8000/account/login',
          { username: inputId, password: inputPw },
          {
            withCredentials: true,
          }
        )
        .then(res => {
          console.log(res.data);
          setLogin(res.data);
          window.localStorage.setItem('loingId', res.data.token);
        });
    } catch (err) {
      console.log(err);
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
