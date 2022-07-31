import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = event => {
    setInputPw(event.target.value);
  };

  const onClickLogin = () => {
    console.log('login trial');
  };

  return (
    <div className="container">
      <div className="login_box">
        <p className="title">MovieBox</p>
        <p className="login_title">Log In</p>
        <div className="login_type_area">
          <div className="id_box">
            y
            <input
              type="text"
              name="input_id"
              placeholder="Enter Username"
              value={inputId}
              onChange={handleInputId}
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
