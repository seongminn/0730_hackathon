import styled from 'styled-components';
import '../../../assets/fonts/fonts.css';
import COLOR from './../../../constants/color';

export const Container = styled.div`
  width: 1000px;
  min-width: 512px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
`;
export const HeaderKor = styled.div`
  font-family: 'BMHANNAPro', sans-serif;
  font-size: 2rem;
  margin-right: 10px;
`;
export const HeaderEng = styled.div`
  color: ${COLOR['GRAY-200']};
  font-size: 1.5rem;
  display: flex;
  align-items: flex-end;
`;
export const DetailWrapper = styled.div`
  height: 100vh;
  display: flex;
`;
export const Poster = styled.img`
  display: block;
  width: 400px;
  height: 520px;
  object-fit: cover;
  src: ${props => props.src};
`;
export const ContentWrapper = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;
export const ContentItem = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
`;
export const ContentTitle = styled.div`
  width: 100px;
  height: 30px;
  color: ${COLOR['GRAY-200']};
`;
export const Content = styled.div`
  width: 100%;
  height: 30px;
`;
export const Summary = styled.div`
  width: 100%;
  height: 150px;
  overflow-y: auto;
`;
export const CommentWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

// export const Star = styled.div`
//   font-size: 1.8rem;
//   display: flex;
//   align-items: center;
//   path {
//     fill: #ffeaa7;
//   }
// `;

// export const StaffConDiv = styled.div`
//   flex: 0.4;
//   padding: 50px 0;
//   display: flex;
//   flex-direction: column;
// `;
// export const StaffItemDiv = styled.div`
//   height: calc(100% / 3);
//   display: flex;
//   flex-direction: column;
// `;
// export const StaffItemImg = styled.div`
//   width: 120px;
//   height: 120px;
//   margin: 0 auto;
//   margin-bottom: 10px;
//   border-radius: 70%;
//   background-image: url(${props => props.url});
//   background-size: cover;
// `;
// export const StaffItemName = styled.div`
//   text-align: center;
//   font-size: 1rem;
//   color: #b3b3b3;
// `;

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
  bottom: 1rem;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
  cursor: pointer;
  /* left: 50%; */
  /* transform: translateX(50%); */
`;

// export const CommentWrapper = styled.div`
//   height: 100vh;
// `;
