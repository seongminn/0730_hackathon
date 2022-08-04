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

export const Result = styled.div`
  display: grid;
  grid-template: auto/repeat(8, 1fr);
  gap: 0 0.65em;

  @media screen and (max-width: 1400px) {
    grid-template: auto/repeat(7, 1fr);
  }

  @media screen and (max-width: 1000px) {
    grid-template: auto/repeat(6, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template: auto/repeat(5, 1fr);
  }
`;

export const Box = styled.div`
  display: inline-block;
  box-sizing: content-box;
  width: 100%;
  font-size: 66px;
  padding-bottom: 3.5rem;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const BoxImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

export const MainTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: white;
  padding-top: 10px;
  text-align: right;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
