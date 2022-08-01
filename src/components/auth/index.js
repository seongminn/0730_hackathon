import styled from 'styled-components';
import Login from './login';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthPage = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default AuthPage;
