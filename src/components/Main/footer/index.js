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
  return (
    <Wrapper>
      <Socials>
        <Link to="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Link>
        <Link to="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="https://www.twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="https://www.youtube.com/">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
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
