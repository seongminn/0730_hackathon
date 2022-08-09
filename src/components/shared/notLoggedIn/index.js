import {
  faGithub /*faGoogle*/,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Text,
  Btn,
  BtnBox,
  SocialBox,
  Icon,
  BtnText,
  SocialBtn,
} from './styled';
// import { ReactComponent as GoogleImg } from '../../../assets/img/google_signin_buttons/web/vector/btn_google_light_normal_ios.svg';

const NotLoggedIn = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Text>로그인이 필요한 서비스입니다. 로그인 하시겠습니까?</Text>

      <SocialBox>
        <SocialBtn style={{ background: '#DE4C39' }}>
          {/* <GoogleImg /> */}
          <Icon>
            <FontAwesomeIcon icon={faGoogle} />
          </Icon>
          {/* <Img src={GoogleImg} /> */}
          <BtnText>Google 계정으로 로그인</BtnText>
        </SocialBtn>
        <SocialBtn style={{ background: '#323232' }}>
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
          <BtnText>Github 계정으로 로그인</BtnText>
        </SocialBtn>
      </SocialBox>

      <BtnBox>
        <Btn
          style={{ background: '#be123c', color: 'white' }}
          onClick={() => navigate('/login')}
        >
          예
        </Btn>
        <Btn onClick={() => navigate(-1)}>아니요</Btn>
      </BtnBox>
    </Wrapper>
  );
};

export default NotLoggedIn;
