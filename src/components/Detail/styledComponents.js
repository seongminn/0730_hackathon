import styled, { css } from 'styled-components';
import back from '../../assets/detailback.jpg';

export const DetailConDiv = styled.div`
  width: 100%;
  min-width: 512px;
  heigt: 100vh;
  background: url()
  // opacity: 0.4;
  margin: 0 auto;
  display: flex;
  background-image: url(${back});
  background-size: cover;

`;
export const DetailMainDiv = styled.div`
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
export const DetailMainConDiv = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DetailLeftDiv = styled.div`
  width: 100%;
  height: 100%;
  // background: red;
  color: white;
  padding: 40px 0 40px 30px;
  flex: 0.7;
  display: flex;
  flex-direction: column;
`;
export const DetailRightDiv = styled.div`
  width: 100%;
  height: 100%;
  // background: blue;
  color: white;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DetailTitleConDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
`;
export const DetailTitleKorDiv = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const DetailTitleEngDiv = styled.div`
  color: white;
`;
export const DetailSpeBoxDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
export const DetailSpeConDiv = styled.div`
  padding: 10px;
  display: flex;
`;
export const DetailSpeTitleDiv = styled.div`
  width: 100px;
  color: white;
  margin-right: 20px;
`;
export const DetailSpeContDiv = styled.div`
  color: yellow;
`;
export const DetailSpeSumDiv = styled.div`
  width: 600px;
  text-align: justify;
  line-height: 1.5;
`;
export const DetailImgDiv = styled.div`
  width: 80%;
  height: 70%;
  background: white;
  margin: 0 auto;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
`;
export const DetailPoster = styled.img`
  width: 100%;
  height: 100%;
  src: ${props => props.src};
`;
export const DetailStaffDiv = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export const DetailStaffBtn = styled.button`
  width: 300px;
  padding: 10px;
  // background: white;
  border: none;
  color: white;
  font-weight: bold;
  text-align: center;
  background: #be123c;
  border-radius: 6px;
`;
