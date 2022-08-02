import styled from 'styled-components';
import Login from './login';
import { useRecoilValue } from 'recoil';
import { authState } from '../../atom';
import Register from './register';

const Wrapper = styled.div`
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
  const auth = useRecoilValue(authState);
  console.log(auth);
  return <Wrapper>{auth ? <Login /> : <Register />}</Wrapper>;
};

export default AuthPage;
