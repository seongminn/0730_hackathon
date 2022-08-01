import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  /* top: calc(50% - ${props => props.height / 2}px); */
  top: 50%;

  right: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;

export const Button = styled(motion.button)`
  z-index: 99;
  color: white;
  border: none;
  background-color: transparent;
  font-size: 18px;
  font-weight: 700;
  position: relative;
  color: #9ca3af;
  cursor: pointer;

  ${props => {
    if (props.isactive === 'true') {
      return css`
        & {
          color: white;
        }
        &::before {
          content: '';
          height: 3px;
          width: 15px;
          top: 0.5em;
          left: -25px;
          position: absolute;
          background-color: white;
          color: white;
        }
      `;
    }
  }};
`;
