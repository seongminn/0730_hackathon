import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlay,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { mainMovies } from '../raws';
import MainController from './controller/MainController';
import { useRef, useState } from 'react';
import {
  Wrapper,
  Banner,
  Content,
  DesBox,
  Ratings,
  Title,
  Description,
  Button,
} from './styled';

const MainPoster = () => {
  const [page, setPage] = useState(0);
  const total = mainMovies.length - 1;
  const DesBoxRef = useRef();

  return (
    <Wrapper bgPhoto={mainMovies[page].backdrop_path}>
      <Content>
        <DesBox
          ref={DesBoxRef}
          height={DesBoxRef.current ? DesBoxRef.current.clientHeight : 4}
        >
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
            onClick={() => window.open(`${mainMovies[page].trailer}`, '_blank')}
          >
            <FontAwesomeIcon icon={faCirclePlay} />
            Watch Trailer
          </Button>
        </DesBox>
        <MainController total={total} page={page} setPage={setPage} />
      </Content>
    </Wrapper>
  );
};

export default MainPoster;
