import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 40% 1fr;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 70%;
  height: 4rem;
  padding: 10px 0;
  font-size: 24px;
  background-color: transparent;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
`;

export const Result = styled.div``;
