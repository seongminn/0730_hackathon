import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  z-index: 999;
`;

const Socials = styled.div``;

const Links = styled.div``;

const Copy = styled.p``;

const Footer = () => {
  return (
    <Wrapper>
      <Socials></Socials>
      <Links></Links>
      <Copy>© 2022 Movie Site by LIKELION 2</Copy>
    </Wrapper>
  );
};

export default Footer;
