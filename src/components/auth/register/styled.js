import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 100px;
`;

export const Title = styled.h2`
  font-family: BMHANNAPro;
  /* color: #be123c; */
  color: #fff;
  font-size: 48px;
  margin-bottom: 40px;
`;

export const Form = styled.form``;

export const InputName = styled.p`
  color: #ff8787;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-bottom: 1px solid #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  outline: none;
  font-size: 18px;
  color: #fff;
  background-color: transparent;
  margin-bottom: 10px;

  &[type='password'] {
    font-family: 'Noto Sans Kr';
    color: #fff;
    letter-spacing: 2px;
  }
`;

// export const LineBox = styled.div`
//   display: flex;
//   flex-basis: 100%;
//   align-items: center;
//   font-size: 14px;
//   margin: 8px 0;

//   &::before,
//   &::after {
//     content: '';
//     flex-grow: 1;
//     margin: 0 16px;
//     background-color: rgba(255, 255, 255, 0.3);
//     height: 1px;
//     font-size: 0px;
//     line-height: 0px;
//   }
// `;

export const Line = styled.hr`
  width: 100%;
  border: none;
  color: #444;
  border-top: 1px solid #444;
  overflow: visible;
  text-align: center;
  margin: 16px 0;

  &::after {
    content: 'or';
    position: relative;
    top: -11px;

    background-color: transparent;
    padding: 0 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  font-size: 16px;
  font-weight: 600;

  background-color: #be123c;
  border-radius: 5px;
  color: #fff;
  margin: 20px 0;
  outline: none;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: #8f0e2d;
  }
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

// export const Icon = styled.div`
//   position: absolute;
//   height: 100%;
//   border-right: 1px solid rgba(255, 255, 255, 0.5);
//   padding: 0 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const BtnText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.1px; ;
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

export const ChangeAuth = styled.span`
  margin: 10px auto;
  color: #868e96;
  font-size: 16px;
  cursor: pointer;
`;
