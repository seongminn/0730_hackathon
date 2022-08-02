import { Link } from 'react-router-dom';
import { Wrapper, Rows, Box, BoxImg, Info } from './styled';

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
