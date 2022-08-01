import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rows = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const Box = styled(motion.div)`
  height: 250px;
  font-size: 66px;
  cursor: pointer;

  &:hover h4 {
    color: white;
  }
`;

const BoxImg = styled.img`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

const Info = styled(motion.div)`
  padding: 10px 0 10px 10px;
  background-color: transparent;
  opacity: 1;
  width: 100%;

  h4 {
    color: #ffffffde;
    text-align: right;
    font-size: 16px;
    line-height: 1.47;
    font-weight: 700;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.1s;
  }
`;

const boxVars = {
  normal: {
    scale: 1,
  },
  hover: {
    transition: { delay: 0, duration: 0.3, type: 'tween' },
    y: -10,
  },
};

const Search = ({ data }) => {
  return (
    <Wrapper>
      <Rows rows={data.length}>
        {data.map(movie => (
          <Link to={`/movie/${movie.id}`}>
            <Box
              key={movie.id}
              variants={boxVars}
              initial="normal"
              whileHover="hover"
            >
              <BoxImg src={movie.poster_url} />
              <Info>
                <h4>{movie.title_kor}</h4>
              </Info>
            </Box>
          </Link>
        ))}
      </Rows>
    </Wrapper>
  );
};

export default Search;
