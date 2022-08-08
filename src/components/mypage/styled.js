import styled from 'styled-components';
import myImg from '../../assets/img/no_img.png';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40% 1fr;
  position: relative;
`;

export const Top = styled.div`
  height: 100%;
  width: 100%;
  background-color: #212529;
`;

export const ImgBox = styled.div`
  background-image: url(${myImg});
  background-size: cover;
  background-color: #495057;
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);
`;

export const Bottom = styled.div`
  height: 100%;
`;

export const Contents = styled.div`
  height: 100%;
  padding: 48px;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const Nickname = styled.h2`
  font-size: 48px;
`;

export const UserInform = styled.div`
  margin: auto 0;
  display: flex;
  gap: 20px;
`;

export const UserText = styled.p`
  cursor: pointer;
`;

export const Category = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
`;

export const Title = styled.p`
  position: relative;
  font-size: 24px;
  transition: all 0.1s ease-in-out;
  color: #495057;
  cursor: pointer;

  &:hover {
    color: #e9ecef;
  }

  & + & {
    margin-left: 20px;
    padding-left: 20px;
  }

  & + &::before {
    content: '';
    width: 1px;
    height: 1rem;
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export const Comment = styled.div``;
