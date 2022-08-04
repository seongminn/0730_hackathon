import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: transparent;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #be123c;
  font-size: 36px;

  /* cursor: pointer; */
`;

export const Title = styled.h2`
  font-weight: bold;
  padding-left: 18px;

  font-family: 'BMHANNApro', sans-serif;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`;

export const SignIn = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;

export const Menu = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #be123c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
