import React, { useEffect, useState } from 'react';
import authAPI from './../../../apis/authAPI';

import {
  Wrapper,
  Title,
  Form,
  InputName,
  Input,
  Button,
  ChangeAuth,
  ErrorMessage,
} from './styled';

const Register = ({ setAuth }) => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputPw2, setInputPw2] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [able, setAble] = useState(false);

  const handleInputEmail = e => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = event => {
    setInputPw(event.target.value);
  };

  const handleInputPw2 = event => {
    setInputPw2(event.target.value);
  };

  const handleInputUsername = event => {
    setInputUsername(event.target.value);
  };

  async function postAccountData(e) {
    e.preventDefault();
    try {
      const input = {
        email: inputEmail,
        username: inputUsername,
        password1: inputPw,
        password2: inputPw2,
        profile_image: 'C:Users82107OneDrive바탕 화면',
      };
      const data = await authAPI.signup({ input });
      alert('회원가입에 성공하였습니다!');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (inputPw !== '') & (inputPw2 !== '') & (inputPw === inputPw2)
      ? setAble(true)
      : setAble(false);
  }, [inputPw, inputPw2]);

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Form onSubmit={e => postAccountData(e)}>
        <InputName>e-mail</InputName>
        <Input
          type="email"
          value={inputEmail}
          onChange={handleInputEmail}
          placeholder="이메일 주소를 입력해주세요."
        />
        <InputName>username</InputName>
        <Input
          type="text"
          value={inputUsername}
          onChange={handleInputUsername}
          placeholder="닉네임을 입력해주세요."
        />

        <InputName>password</InputName>
        <Input
          type="password"
          value={inputPw}
          onChange={handleInputPw}
          placeholder="비밀번호를 입력해주세요."
        />
        <InputName>password2</InputName>
        <Input
          type="password"
          value={inputPw2}
          onChange={handleInputPw2}
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        {(inputPw2 !== '') & (inputPw !== inputPw2) ? (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        ) : null}

        <Button
          disabled={!able}
          style={{ backgroundColor: able ? '#be123c' : '#868e96' }}
        >
          Log In
        </Button>
      </Form>

      <ChangeAuth onClick={() => setAuth(true)}>
        ALREADY HAVE AN ACCOUNT?
      </ChangeAuth>
    </Wrapper>
  );
};

export default Register;
