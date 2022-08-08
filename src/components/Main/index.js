// import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import styled from 'styled-components';
// import { datas, getMovie } from '../api';
import MainSlider from './slider';
import MainPoster from './poster';
import Loading from './../shared/Loading';

import Footer from './footer';
import { useQuery } from 'react-query';
import axios from 'axios';
import PATH from './../../constants/path';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const { data, isLoading: loading } = useQuery(['moviedata'], () =>
    axios.get(`${PATH.BASE_URL}${PATH.DETAIL}`).then(data => data)
  );

  return (
    <>
      {loading ? (
        <>
          <Loading />
          <Wrapper />
        </>
      ) : (
        <>
          <Wrapper>
            <MainPoster />
            <MainSlider data={data.data} />
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
