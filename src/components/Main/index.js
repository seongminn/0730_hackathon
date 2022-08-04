// import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from 'react-query';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
// import { datas, getMovie } from '../api';
import MainSlider from './slider';
import MainPoster from './poster';
import Loading from '../loading';
import Footer from './footer';
import { useQuery } from 'react-query';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  // const data = datas();
  // const loading = false;

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const getApi = async () => {
  //   const res = await fetch('http://127.0.0.1:8000/movie/');

  //   return await res.json();
  // };

  const { data, isLoading: loading } = useQuery(['moviedata'], () =>
    axios.get('http://127.0.0.1:8000/movie/').then(data => data)
  );

  // useEffect(() => {
  //   async function getAllData() {
  //     setLoading(true);
  //     try {
  //       const { data: result } = await axios.get(
  //         'http://127.0.0.1:8000/movie/'
  //       );
  //       setData(result);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getAllData();
  // }, []);

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

            <MainSlider data={data ? data.data : []} />
            <MainSlider data={data ? data.data : []} />
            <MainSlider data={data ? data.data : []} />
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
