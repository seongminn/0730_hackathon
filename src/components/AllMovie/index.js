import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading';
import Pagination from './pagination';
import { Wrapper, Rows, Box, BoxImg, Info, Page } from './styled';

const boxVars = {
  normal: {
    scale: 1,
  },
  hover: {
    transition: { delay: 0, duration: 0.3, type: 'tween' },
    y: -10,
  },
};

const offset = 6;

const AllMoviePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

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
    getAllData();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Rows rows={data.length}>
            {data.slice(offset * page, offset * page + offset).map(movie => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
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
          <Page>
            <Pagination
              total={data.length}
              limit={6}
              page={page}
              setPage={setPage}
            />
          </Page>
        </>
      )}
    </Wrapper>
  );
};

export default AllMoviePage;
