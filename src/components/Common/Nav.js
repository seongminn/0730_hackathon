import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faBars } from '@fortawesome/free-solid-svg-icons';

import SearchInput from './SearchInput';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { checkLoginState } from '../../atom';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: transparent;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #be123c;
  font-size: 36px;

  /* cursor: pointer; */
`;

const Title = styled.h2`
  font-weight: bold;
  padding-left: 18px;

  font-family: 'BMHANNApro', sans-serif;
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
  cursor: pointer;
`;

const Menu = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #be123c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Nav = () => {
  const [checked, setChecked] = useRecoilState(checkLoginState);
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate('/allMovies');
  };
  return (
    <Wrapper>
      <Link to="/">
        <LogoBox>
          <FontAwesomeIcon icon={faClapperboard} style={{ fontSize: 32 }} />
          <Title>Movie Box</Title>
        </LogoBox>
      </Link>

      <SearchInput />
      <UserBox>
        {checked && <SignIn onClick={() => setChecked(false)}>Sign out</SignIn>}
        {/* <SignIn>{checked ? 'Sign out' : 'Sign in'}</SignIn> */}
        <Menu>
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: 16, color: 'white' }}
            onClick={onClickMenu}
          />
        </Menu>
      </UserBox>
    </Wrapper>
  );
};

export default Nav;
