import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClapperboard,
  faTv,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import Search from '../Main/Search';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: transparent;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #be123c;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding-left: 12px;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`;

const SignIn = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;

const Menu = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #be123c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = () => {
  return (
    <Wrapper>
      <LogoBox>
        <FontAwesomeIcon icon={faClapperboard} style={{ fontSize: 24 }} />
        <Title>Movie Box</Title>
      </LogoBox>
      <Search />
      <UserBox>
        <SignIn>Sign in</SignIn>
        <Menu>
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: 16, color: 'white' }}
          />
        </Menu>
      </UserBox>
    </Wrapper>
  );
};

export default Nav;
