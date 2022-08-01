import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Slider = styled.div`
  position: relative;
  top: 90vh;
  width: 80%;
  height: 300px;
  margin: 0 auto;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  gap: 10px;
  width: 100%;
  height: 300px;
  padding: 0 60px;
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 50%;
  font-size: 32px;
  background-color: transparent;
  color: white;
  border-color: transparent;
  z-index: 50;

  cursor: pointer;
`;

export const Box = styled(motion.div)`
  width: 100%;
  height: 300px;
  font-size: 66px;
  cursor: pointer;
`;

export const BoxImg = styled.img`
  position: relative;
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
