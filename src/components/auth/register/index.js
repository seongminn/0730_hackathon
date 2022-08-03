import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  Wrapper,
  Title,
  Form,
  InputName,
  Input,
  LineBox,
  Line,
  Button,
  SocialBox,
  Icon,
  BtnText,
  SocialBtn,
  ChangeAuth,
} from './styled';

const Register = ({ setAuth }) => {
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

  async function postAccountData(e) {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/account/signup', {
        username: inputId,
        password: inputPw,
        nickname: inputNickname,
        location: inputLocation,
      });
      alert('회원가입에 성공하였습니다!');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <Form onSubmit={e => postAccountData(e)}>
        <InputName>username</InputName>
        <Input type="text" value={inputId} onChange={handleInputId} />
        <InputName>password</InputName>
        <Input type="password" value={inputPw} onChange={handleInputPw} />
        <InputName>nickname</InputName>
        <Input
          type="text"
          value={inputNickname}
          onChange={handleInputNickname}
        />
        <InputName>location</InputName>
        <Input
          type="text"
          value={inputLocation}
          onChange={handleInputLocation}
        />
        <Button>Log In</Button>
      </Form>

      <ChangeAuth onClick={setAuth}>ALREADY HAVE AN ACCOUNT?</ChangeAuth>
    </Wrapper>
  );
};

export default Register;
