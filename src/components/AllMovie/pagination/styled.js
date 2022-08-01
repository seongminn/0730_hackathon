import styled from 'styled-components';

export const Btn = styled.button`
  padding: 0 10px;
  font-size: 24px;
  color: ${props => props.disabled || '#d9d9d9'};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
