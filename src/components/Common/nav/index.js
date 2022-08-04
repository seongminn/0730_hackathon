import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClapperboard,
  faBars,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper, LogoBox, Title, UserBox, SignIn, Menu } from './styled';

import SearchInput from './input';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState, tokenState } from '../../../atom';
import { useEffect, useState } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(tokenState);
  const [scroll, setScroll] = useState(0);
  const [storage, setStorage] = useState(false);

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

  useEffect(() => {
    setStorage(localStorage.getItem('loginId') && true);
  }, [token]);

  return (
    <Wrapper visiblity={scroll > 80}>
      <Link to="/">
        <LogoBox>
          <FontAwesomeIcon icon={faClapperboard} style={{ fontSize: 32 }} />
          <Title>2럴수가</Title>
        </LogoBox>
      </Link>

      <UserBox>
        <>
          {storage ? (
            <SignIn
              onClick={() => onClickLogout()}
              style={storage || { display: 'none' }}
            >
              Sign out
            </SignIn>
          ) : (
            <Link to="/login">
              <SignIn>Sign In</SignIn>
            </Link>
          )}
        </>
        <Link to="/search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: 20, color: 'white' }}
          />
        </Link>

        {/* <SignIn>{checked ? 'Sign out' : 'Sign in'}</SignIn> */}
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
