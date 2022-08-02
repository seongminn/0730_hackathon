import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faBars } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, LogoBox, Title, UserBox, SignIn, Menu } from './styled';

import SearchInput from './input';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { tokenState } from '../../../atom';
import { useEffect, useState } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState);
  const [scroll, setScroll] = useState(0);

  const onClickMenu = () => {
    navigate('/allMovies');
  };

  const onClickLogout = () => {
    window.localStorage.removeItem('loginId');
    setToken({});

    navigate('/');
  };

  const onScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <Wrapper visiblity={scroll > 80}>
      <Link to="/">
        <LogoBox>
          <FontAwesomeIcon icon={faClapperboard} style={{ fontSize: 32 }} />
          <Title>2럴수가</Title>
        </LogoBox>
      </Link>

      <SearchInput />
      <UserBox>
        <SignIn onClick={() => onClickLogout()}>Sign out</SignIn>
        {/* <SignIn>{checked ? 'Sign out' : 'Sign in'}</SignIn> */}
        <Link to="/allMovies">
          <Menu>
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 16, color: 'white' }}
              onClick={onClickMenu}
            />
          </Menu>
        </Link>
      </UserBox>
    </Wrapper>
  );
};

export default Nav;
