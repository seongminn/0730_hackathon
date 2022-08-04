import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 40%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #fff;
  outline: none;
  font-size: 18px;
  color: #fff;

  &::placeholder {
    font-family: 'BMHANNAAir', sans-serif;
    color: #fff;
  }
`;

export const Btn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;
