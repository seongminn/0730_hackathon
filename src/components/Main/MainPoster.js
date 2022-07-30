import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { mainMovies } from './movies';
import { useEffect, useState } from 'react';
import MainController from './MainController';
import { AnimatePresence } from 'framer-motion';

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
  top: 50%;
  padding-left: 35px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Ratings = styled.p``;

const Title = styled.h2`
  font-size: 48px;
  text-align: left;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 18px;
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

  console.log(page);

  return (
    <>
      <Wrapper key={mainMovies[page].id}>
        <Banner bgPhoto={mainMovies[page].backdrop_path} />
        <Content>
          <DesBox>
            <Title>{mainMovies[page].title}</Title>
            <Ratings>
              <FontAwesomeIcon icon={faStar} />
              &nbsp;{mainMovies[page].vote_average}
            </Ratings>
            <Description>{mainMovies[page].overview}</Description>
            <Button>
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
