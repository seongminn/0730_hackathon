import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faBars } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, LogoBox, Title, UserBox, SignIn, Menu } from './styled';
import PATH from '../../../constants/path';

import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loginState } from '../../../store/atom';

import SearchInput from '../SearchInput/index';

const Nav = () => {
  const navigate = useNavigate();
  // const setLogin = useSetRecoilState(loginState);

  const onClickMenu = () => {
    navigate(`${PATH.ALLMOVIES}`);
  };

  // const onClickLogout = () => {
  //   // window.localStorage.removeItem('loginId');
  //   setLogin({ isLogin: false, accessToken: '' });
  //   window.location.reload();
  // };
  return (
    <Wrapper>
      {/* <Link to="/">
        <LogoBox>
          <FontAwesomeIcon icon={faClapperboard} style={{ fontSize: 32 }} />
          <Title>2럴수가</Title>
        </LogoBox>
      </Link>
      <SearchInput />
      <UserBox>
        <SignIn onClick={() => onClickLogout()}>Sign out</SignIn> */}
      {/* <SignIn>{checked ? 'Sign out' : 'Sign in'}</SignIn> */}
      {/* <Menu>
          <Link to="/allMovies">
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 16, color: 'white' }}
              onClick={onClickMenu}
            />
          </Link>
        </Menu>
      </UserBox> */}
    </Wrapper>
  );
};

export default Nav;
