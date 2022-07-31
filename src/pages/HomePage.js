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
import Footer from '../components/Main/Footer';
import { datas } from '../api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150vh;
`;

const Home = () => {
  // const data = datas();
  // const loading = false;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllData() {
      setLoading(true);
      try {
        const { data: result } = await axios.get(
          'http://127.0.0.1:8000/movie/'
        );
        setData(result);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(true);
    getAllData();
  }, []);

  console.log(data);

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
            <MainSlider data={data} />
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
