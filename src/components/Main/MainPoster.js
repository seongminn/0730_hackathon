import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlay,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { mainMovies } from './movies';
import MainController from './MainController';
import { AnimatePresence } from 'framer-motion';
import { createRef, useRef, useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: 90vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${props => props.bgPhoto});
  /* background-image: url(${props => props.bgPhoto}); */
  background-size: cover;

  display: flex;
  align-items: center;
  gap: 16px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 35px;
`;

const DesBox = styled.div`
  position: absolute;
  top: calc(50% - ${props => props.height / 2}px);
  padding-left: 35px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Ratings = styled.p`
  color: #fcd34d;
`;

const Title = styled.h2`
  font-size: 64px;
  text-align: left;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 24px;
  text-align: left;
  font-weight: 400;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  width: fit-content;
  background-color: #be123c;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  border: none;

  cursor: pointer;
`;

const MainPoster = () => {
  const [page, setPage] = useState(0);
  const total = mainMovies.length - 1;
  const DesBoxRef = useRef();

  return (
    <>
      <Wrapper key={mainMovies[page].id}>
        <Banner bgPhoto={mainMovies[page].backdrop_path} />
        <Content>
          <DesBox ref={DesBoxRef} height={DesBoxRef.current?.clientHeight}>
            <Title>{mainMovies[page].title}</Title>
            <Ratings>
              {[
                ...Array(
                  Math.trunc(Math.round(mainMovies[page].vote_average) / 2)
                ),
              ].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
              {Math.trunc(Math.round(mainMovies[page].vote_average) % 2) ? (
                <FontAwesomeIcon icon={faStarHalfStroke} />
              ) : null}
            </Ratings>
            <Description>{mainMovies[page].overview}</Description>
            <Button
              onClick={() =>
                window.open(`${mainMovies[page].trailer}`, '_blank')
              }
            >
              <FontAwesomeIcon icon={faCirclePlay} />
              Watch Trailer
            </Button>
          </DesBox>
        </Content>
      </Wrapper>

      <MainController total={total} page={page} setPage={setPage} />
    </>
  );
};

export default MainPoster;
