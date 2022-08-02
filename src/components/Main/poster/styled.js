import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${props => props.bgPhoto});
  /* background-image: url(${props => props.bgPhoto}); */
  background-size: cover;
  background-position: top center;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  margin: auto 0;
`;

export const DesBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const Ratings = styled.p`
  color: #fcd34d;
`;

export const Title = styled.h2`
  font-size: 64px;
  text-align: left;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 24px;
  text-align: left;
  font-weight: 400;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  width: fit-content;
  background-color: #be123c;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  border: none;

  cursor: pointer;
`;
