import styled, { css } from 'styled-components';
import back from '../../assets/detailback.jpg';
import '../../fonts/fonts.css';

export const ConDiv = styled.div`
  width: 100%;
  min-width: 512px;
  heigt: 100vh;
  // opacity: 0.4;
  margin: 0 auto;
  display: flex;
  background-image: url(${back});
  background-size: cover;
`;
export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  // background: rgba(250, 250, 250, 0.3);
  background: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;
export const MainConDiv = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LeftDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0 40px 30px;
  flex: 0.6;
  display: flex;
  flex-direction: column;
`;
export const RightDiv = styled.div`
  width: 100%;
  height: 100%;
  flex: 0.4;
  display: flex;
`;
export const TitleConDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
`;
export const TitleKorDiv = styled.div`
  font-family: 'BMHANNAPro', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 10px;
`;
export const TitleEngDiv = styled.div`
  color: #b3b3b3;
`;
export const SpeBoxDiv = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;
export const RatBoxDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;
export const RatInboxDiv = styled.div`
  flex: 0.5;
`;
export const SpeConDiv = styled.div`
  padding: 10px;
  display: flex;
`;
export const SpeTitleDiv = styled.div`
  width: 90px;
  color: #b3b3b3;
  margin-right: 20px;
`;
export const SpeContDiv = styled.div`
  color: white;
`;
export const SpeSumDiv = styled.div`
  width: 520px;
  text-align: justify;
  line-height: 1.5;
`;
export const Star = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  path {
    fill: #ffeaa7;
  }
`;
export const ImgDiv = styled.div`
  flex: 0.6;
  display: flex;
  align-items: center;
`;
export const Poster = styled.img`
  width: 100%;
  height: 80%;
  src: ${props => props.src};
`;
export const StaffConDiv = styled.div`
  flex: 0.4;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
`;
export const StaffItemDiv = styled.div`
  height: calc(100% / 3);
  display: flex;
  flex-direction: column;
`;
export const StaffItemImg = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 70%;
  background-image: url(${props => props.url});
  background-size: cover;
`;
export const StaffItemName = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #b3b3b3;
`;
