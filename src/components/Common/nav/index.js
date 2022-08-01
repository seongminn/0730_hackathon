import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faBars } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, LogoBox, Title, UserBox, SignIn, Menu } from './styled';

import SearchInput from '../searchInput';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate('/allMovies');
  };
  return (
    <Wrapper>
      <Link to="/">
        <LogoBox>
          <FontAwesomeIcon icon={faClapperboard} style={{ fontSize: 32 }} />
          <Title>2럴수가</Title>
        </LogoBox>
      </Link>

      <SearchInput />
      <UserBox>
        <SignIn onClick={() => window.location.reload()}>Sign out</SignIn>
        {/* <SignIn>{checked ? 'Sign out' : 'Sign in'}</SignIn> */}
        <Menu>
          <Link to="/allMovies">
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 16, color: 'white' }}
              onClick={onClickMenu}
            />
          </Link>
        </Menu>
      </UserBox>
    </Wrapper>
  );
};

export default Nav;
