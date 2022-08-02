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
  SocialBtn,
  LineBox,
  BtnText,
  Icon,
  Line,
  ChangeAuth,
} from './styled';
import { useSetRecoilState } from 'recoil';
import { tokenState } from '../../../atom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = ({ setAuth }) => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const setToken = useSetRecoilState(tokenState);

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = event => {
    setInputPw(event.target.value);
  };

  async function postLoginData(e) {
    e.preventDefault();
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

  const changeAuth = () => {
    setAuth(false);
    console.log('to signup');
  };

  return (
    <Wrapper>
      <Title>Log In</Title>
      <Form onSubmit={e => postLoginData(e)}>
        <InputName>username</InputName>
        <Input type="text" value={inputId} onChange={handleInputId} />
        <InputName>password</InputName>
        <Input type="password" value={inputPw} onChange={handleInputPw} />
        <Button>Log In</Button>
      </Form>

      <Line />

      <SocialBox>
        <SocialBtn style={{ background: '#DE4C39' }}>
          <Icon>
            <FontAwesomeIcon icon={faGoogle} />
          </Icon>
          <BtnText>Continue with Google</BtnText>
        </SocialBtn>
        <SocialBtn style={{ background: '#323232' }}>
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
          <BtnText>Continue with GitHub</BtnText>
        </SocialBtn>
      </SocialBox>
      <ChangeAuth onClick={changeAuth}>Don't have an accout?</ChangeAuth>
    </Wrapper>
  );
};

export default Login;
