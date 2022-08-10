import styled from 'styled-components';

export const GenreWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-right: 10px;
`;

export const GenreItem = styled.div`
  width: 100px;
  height: 30px;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 1.2rem;
  color: ${props => props.color};
  background-color: ${props => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
