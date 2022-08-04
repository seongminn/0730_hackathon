import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClapperboard,
  faBars,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper, LogoBox, Title, UserBox, SignIn, Menu } from './styled';
import PATH from '../../../constants/path';

// import SearchInput from './input';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../../store/atom';
import { useEffect, useState } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(loginState);
  const [scroll, setScroll] = useState(0);

  // const onClickMenu = () => {
  //   navigate('/allMovies');
  // };

  const onClickLogout = () => {
    window.localStorage.removeItem('loginId');
    setLogin({ isLogin: false, accessToken: '' });

    navigate('/');
  };

  const onScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  console.log(PATH.SEARCH);

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
          {login.isLogin ? (
            <SignIn onClick={() => onClickLogout()}>Sign out</SignIn>
          ) : (
            <Link to="/login">
              <SignIn>Sign In</SignIn>
            </Link>
          )}
        </>
        <Link to={`${PATH.SEARCH}`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: 20, color: 'white' }}
          />
        </Link>

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
