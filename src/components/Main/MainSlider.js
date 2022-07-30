import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
// import { datas, getMovie } from '../../api';

const Slider = styled.div`
  position: relative;
  top: 90vh;
  width: 80%;
  height: 100%;
  margin: 100px auto;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  top: 50%;
  gap: 10px;
  width: 100%;
  height: 300px;
  padding: 0 60px;
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  font-size: 32px;
  background-color: transparent;
  color: white;
  border-color: transparent;
  z-index: 50;

  cursor: pointer;
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 300px;
  font-size: 66px;
  cursor: pointer;
`;

const BoxImg = styled.img`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

const MainTitle = styled.p`
  font-size: 16px;
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

const rowVars = {
  hidden: back => ({
    x: back ? -window.outerWidth - 10 : window.outerWidth + 10,
  }),
  visible: {
    x: 0,
  },
  exit: back => ({
    x: back ? window.outerWidth + 10 : -window.outerWidth - 10,
  }),
};

const offset = 6;

const MainSlider = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving(prev => !prev);
  console.log(data.movies);

  const increaseIndex = dir => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      if (dir === 'prev') {
        setBack(true);
        setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
      } else if (dir === 'next') {
        setBack(false);
        setIndex(prev => (prev === 0 ? maxIndex : prev - 1));
      }
    }
  };

  return (
    <Slider>
      <AnimatePresence
        custom={back}
        initial={false}
        onExitComplete={toggleLeaving}
      >
        <Btn
          style={{ left: 20 }}
          key="left"
          onClick={() => increaseIndex('prev')}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </Btn>
        <Row
          custom={back}
          variants={rowVars}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'tween', duration: 0.5 }}
          key={index}
        >
          {data &&
            data.slice(index * offset, index * offset + offset).map(movie => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Box>
                  <BoxImg src={movie.poster_url} />
                  <MainTitle>{movie.title_kor}</MainTitle>
                </Box>
              </Link>
            ))}
        </Row>
        <Btn
          style={{ right: 20 }}
          key="right"
          onClick={() => increaseIndex('next')}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </Btn>
      </AnimatePresence>
    </Slider>
  );
};

export default MainSlider;
