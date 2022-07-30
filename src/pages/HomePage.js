// import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from 'react-query';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { datas, getMovie } from '../api';
import MainSlider from '../components/Main/MainSlider';
import MainPoster from '../components/Main/MainPoster';
import Loading from '../components/Loading/Loading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  // const { data, isLoading } = useQuery(['movies'], getMovie);
  // console.log(data);
  // const data = datas();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllData() {
      try {
        const { data: result } = await axios.get(
          'https://334e6eae-a450-4bd1-93ba-cd6f24271194.mock.pstmn.io/movie/movielist'
        );
        setData(result.movies);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(true);
    getAllData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <MainPoster />
          <MainSlider data={data} />
        </Wrapper>
      )}
    </>
  );
};

export default Home;
