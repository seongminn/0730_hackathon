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
import { loginState, userState } from '../../../store/atom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

import authAPI from './../../../apis/authAPI';
import PATH from './../../../constants/path';
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

  // async function postLoginData(e) {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .post(
  //         'http://127.0.0.1:8000/account/login',
  //         { username: inputId, password: inputPw },
  //         {
  //           withCredentials: true,
  //         }
  //       )
  //       .then(res => {
  //         console.log(res.data);
  //         alert('로그인에 성공하였습니다.');
  //         navigate(-1);

  //         window.localStorage.setItem('loginId', res.data.token);

  //         setToken(res.data);
  //       });
  //   } catch (err) {
  //     console.log(err);
  const onClickLogin = () => {
    postLoginData();
  };

  const onKeyPress = e => {
    e.key === 'Enter' && onClickLogin();
  };

  async function postLoginData(e) {
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
      <ChangeAuth onClick={changeAuth}>NOT A MEMBER YET?</ChangeAuth>
    </Wrapper>
  );
};

export default Login;
