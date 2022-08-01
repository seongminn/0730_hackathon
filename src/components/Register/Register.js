import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useRecoilState } from 'recoil';
import { registerState } from '../../atom';

const Register = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [register, setRegister] = useRecoilState(registerState);

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = event => {
    setInputPw(event.target.value);
  };

  const onClickRegister = () => {
    setRegister({ username: inputId, password: inputPw });
  };

  return (
    <div className="container">
      <div className="login_box">
        <p className="title">Register</p>
        <div className="login_type_area">
          <div className="id_box">
            <p htmlFor="input_id">Username</p>
            <input
              type="text"
              name="input_id"
              placeholder="사용할 Username을 입력해주세요"
              value={inputId}
              onChange={handleInputId}
            />
          </div>
          <div className="pw_box">
            <p htmlFor="input_pw">Password</p>
            <input
              type="password"
              name="input_pw"
              placeholder="사용할 Password를 입력해주세요"
              value={inputPw}
              onChange={handleInputPw}
            />
          </div>
        </div>
        <button
          className="register_btn"
          onClick={onClickRegister}
          type="button"
        >
          Sign Up
        </button>
        <Link to="/">
          <p className="login_link">
            <span>이미 가입한 기존사용자는 </span>Log In
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
