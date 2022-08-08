import styled from 'styled-components';
import back from '../../../assets/img/detailback.jpg';
import '../../../assets/fonts/fonts.css';

export const Wrapper = styled.div``;

export const ConDiv = styled.div`
  width: 100%;
  min-width: 512px;
  height: 100vh;
  // opacity: 0.4;
  margin: 0 auto;
  display: flex;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1)
    ),
    url(${back});
  /* background-image: url(${back}); */
  background-size: cover;
`;
export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  // background: rgba(250, 250, 250, 0.3);
  background: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
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

export const ArrowBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  background-color: #be123c;
  border-radius: 50%;
  font-size: 24px;
  position: sticky;
  bottom: 3rem;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
  cursor: pointer;
  /* left: 50%; */
  /* transform: translateX(50%); */
`;

export const CommentWrapper = styled.div`
  height: 100vh;
`;
