import axios from 'axios';
import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  Form,
  InputName,
  Input,
  Button,
  SocialBox,
} from './styled';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../atom';
import './Login.css';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const [token, setToken] = useRecoilState(tokenState);

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
          window.localStorage.setItem('loginId', res.data.token);

          setToken(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Wrapper>
      <Title>Log In</Title>
      <Form>
        <InputName>username</InputName>
        <Input type="text" />
        <InputName>password</InputName>
        <Input type="password" />
        <Button>Log In</Button>
      </Form>

      <SocialBox></SocialBox>
      <Button>Login with Facebook</Button>
      <Button>Login with Google</Button>
    </Wrapper>
  );
};

export default Login;
