import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useRecoilState } from 'recoil';
import { registerState } from '../../../atom';
import axios from 'axios';

const Register = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputNickname, setInputNickname] = useState('');
  const [inputLocation, setInputLocation] = useState('');

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = event => {
    setInputPw(event.target.value);
  };

  const handleInputNickname = event => {
    setInputNickname(event.target.value);
  };

  const handleInputLocation = event => {
    setInputLocation(event.target.value);
  };

  async function postLoginData() {
    try {
      await axios.post('http://127.0.0.1:8000/account/signup', {
        username: inputId,
        password: inputPw,
        nickname: inputNickname,
        location: inputLocation,
      });
    } catch (err) {
      console.log(err);
    }
  }

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
          <div className="pw_box">
            <p htmlFor="input_pw">Nickname</p>
            <input
              type="text"
              name="input_nickname"
              placeholder="사용할 Nickname를 입력해주세요"
              value={inputNickname}
              onChange={handleInputNickname}
            />
          </div>
          <div className="pw_box">
            <p htmlFor="input_pw">Location</p>
            <input
              type="text"
              name="input_location"
              placeholder="사용할 Location를 입력해주세요"
              value={inputLocation}
              onChange={handleInputLocation}
            />
          </div>
        </div>
        <button className="register_btn" onClick={postLoginData} type="button">
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
