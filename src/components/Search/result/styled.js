import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Rows = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const Box = styled(motion.div)`
  height: 250px;
  font-size: 66px;
  cursor: pointer;

  &:hover h4 {
    color: white;
  }
`;

export const BoxImg = styled.img`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

export const Info = styled(motion.div)`
  padding: 10px 0 10px 10px;
  background-color: transparent;
  opacity: 1;
  width: 100%;

  h4 {
    color: #ffffffde;
    text-align: right;
    font-size: 16px;
    line-height: 1.47;
    font-weight: 700;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.1s;
  }
`;
