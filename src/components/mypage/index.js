import { useState } from 'react';
import { loginState } from '../../store/atom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import {
  Bottom,
  Category,
  Comment,
  Contents,
  ImgBox,
  Nickname,
  Title,
  Top,
  User,
  UserInform,
  UserText,
  Wrapper,
} from './styled';

const My = () => {
  // true일 경우 내가 작성한 댓글, false일 경우 북마크한 댓글
  const [login, setLogin] = useRecoilState(loginState);
  const [comments, setComments] = useState(true);
  const navigate = useNavigate();

  const Logout = () => {
    setLogin({ isLogin: false, accessToken: '' });
    navigate('/');
  };

  return (
    <Wrapper>
      {!login.isLogin ? (
        '로그인이 필요합니다. 로그인 하시겠습니까?'
      ) : (
        <>
          <Top>
            <ImgBox />
          </Top>
          <Bottom>
            <Contents>
              <User>
                <Nickname>Seongminn</Nickname>
                <UserInform>
                  <UserText>정보 수정</UserText>
                  <UserText onClick={Logout}>로그아웃</UserText>
                </UserInform>
              </User>
              <Category>
                <Title
                  style={{ color: comments && 'white' }}
                  onClick={() => setComments(true)}
                >
                  내가 작성한 댓글
                </Title>
                <Title
                  style={{ color: comments || 'white' }}
                  onClick={() => setComments(false)}
                >
                  저장한 댓글
                </Title>
              </Category>
              <Comment>{comments ? '내가 작성한 댓글' : '저장한 댓글'}</Comment>
            </Contents>
          </Bottom>
        </>
      )}
    </Wrapper>
  );
};

export default My;
