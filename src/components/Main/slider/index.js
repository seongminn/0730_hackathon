import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Slider, Row, Btn, Box, BoxImg, MainTitle } from './styled';
// import { datas, getMovie } from '../../api';

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

const boxVars = {
  normal: {
    scale: 1,
  },
  hover: {
    transition: { delay: 0, duration: 0.3, type: 'tween' },
    y: -10,
  },
};

const offset = 8;

const MainSlider = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving(prev => !prev);

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
          {/* <FontAwesomeIcon icon={faCaretLeft} /> */}
          <FontAwesomeIcon icon={faAngleLeft} />
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
          {data.slice(index * offset, index * offset + offset).map(movie => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <Box variants={boxVars} initial="normal" whileHover="hover">
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
          {/* <FontAwesomeIcon icon={faCaretRight} /> */}
          <FontAwesomeIcon icon={faAngleRight} />
        </Btn>
      </AnimatePresence>
    </Slider>
  );
};

export default MainSlider;
