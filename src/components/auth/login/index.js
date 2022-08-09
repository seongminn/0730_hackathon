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
  BtnText,
  Icon,
  ChangeAuth,
  LineBox,
} from './styled';
import { loginState, userState } from '../../../store/atom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

import authAPI from './../../../apis/authAPI';
import { useSetRecoilState } from 'recoil';

const Login = ({ setAuth }) => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const setLogin = useSetRecoilState(loginState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const handleInputId = e => {
    setInputId(e.target.value);
  };

  const handleInputPw = e => {
    setInputPw(e.target.value);
  };

  async function postLoginData(e) {
    try {
      e.preventDefault();
      const input = { username: inputId, password: inputPw };
      const data = await authAPI.login({ input });
      setLogin({ isLogin: true, accessToken: data.token });
      setUser({ nickname: data.nickname });
      navigate(-1);
    } catch (error) {
      console.log('로그인 오류');
    }
  }

  return (
    <Wrapper>
      <Title>Log In</Title>
      <Form onSubmit={e => postLoginData(e)}>
        <InputName>username</InputName>
        <Input
          type="text"
          value={inputId}
          onChange={handleInputId}
          placeholder="아이디를 입력해주세요."
        />
        <InputName>password</InputName>
        <Input
          type="password"
          value={inputPw}
          onChange={handleInputPw}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button>Log In</Button>
      </Form>

      <LineBox>or</LineBox>

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
      <ChangeAuth onClick={() => setAuth(false)}>NOT A MEMBER YET?</ChangeAuth>
    </Wrapper>
  );
};

export default Login;
