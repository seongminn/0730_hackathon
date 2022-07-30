import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { datas, getMovie } from '../api';
import MainSlider from '../components/Main/MainSlider';
import MainPoster from '../components/Main/MainPoster';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const { data, isLoading } = useQuery(['movies'], getMovie);
  console.log(data);
  // const data = datas();

  return (
    <Wrapper>
      <MainPoster />

      <MainSlider data={data} />
    </Wrapper>
  );
};

export default Home;
