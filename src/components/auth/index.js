import { useState } from 'react';
import styled from 'styled-components';
import Login from './login';
import Register from './register';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url('https://image.tmdb.org/t/p/original/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg');

  /* background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 1) 20%,
    url('https://image.tmdb.org/t/p/original/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg')
      80%
  ); */
`;

const AuthPage = () => {
  const [auth, setAuth] = useState(true);

  return (
    <Wrapper>
      {auth ? <Login setAuth={setAuth} /> : <Register setAuth={setAuth} />}
    </Wrapper>
  );
};

export default AuthPage;
