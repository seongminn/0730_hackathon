import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
`;

export const Text = styled.p``;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Btn = styled.button`
  font-family: 'BMHANNAAir';
  font-size: 16px;
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 100%;
`;

export const Icon = styled.div`
  width: 3.5rem;
  height: 100%;
  font-size: 18px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img``;

export const BtnText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialBtn = styled.button`
  position: relative;
  width: 100%;
  height: 2.5rem;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
