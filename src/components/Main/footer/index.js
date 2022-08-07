import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Wrapper, Socials, Links, Copy } from './styled';

const Footer = () => {
  const onClickIcon = address => {
    window.open(`${address}`);
  };

  return (
    <Wrapper>
      <Socials>
        <FontAwesomeIcon
          icon={faFacebookSquare}
          onClick={() => onClickIcon('https://www.facebook.com')}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          onClick={() => onClickIcon('https://www.instagram.com')}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          onClick={() => onClickIcon('https://www.twitter.com')}
        />
        <FontAwesomeIcon
          icon={faYoutube}
          onClick={() => onClickIcon('https://www.youtube.com')}
        />
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
