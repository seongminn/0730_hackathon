import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  margin-bottom: 50px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 36px;
  align-items: center;
  z-index: 999;
`;

const Socials = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 48px;
  font-size: 24px;
`;

const Links = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Copy = styled.p`
  color: #6b7280;
  font-size: 18px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Socials>
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
      </Socials>
      <Links style={{ fontSize: '18px' }}>
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </Links>
      <Copy>© 2022 Movie Site by LIKELION 2</Copy>
    </Wrapper>
  );
};

export default Footer;
