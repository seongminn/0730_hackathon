import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '../components/AllMovie/Pagination';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

const Info = styled(motion.div)`
  padding: 10px 0 10px 10px;
  background-color: transparent;
  opacity: 1;

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

const Page = styled.div``;

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
    </Wrapper>
  );
};

export default AllMoviePage;
