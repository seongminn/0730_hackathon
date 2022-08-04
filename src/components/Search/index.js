import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useRecoilValue } from 'recoil';
// import { searchState } from '../../atom';
import Loading from '../loading';
// import Search from './result';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import {
  Content,
  Input,
  InputBox,
  Result,
  Box,
  BoxImg,
  MainTitle,
} from './styled';
import { Link } from 'react-router-dom';
// import Pagination from './pagination';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 3rem;
`;

const SearchPage = () => {
  const [wholeData, setWholeData] = useState([]);
  // const [curData, setCurData] = useState([]);
  const [showData, setShowData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const { data, isLoading: loading } = useQuery(['moviedata'], () =>
    axios.get('http://127.0.0.1:8000/movie/').then(res => res)
  );

  const handleSearch = e => {
    const {
      target: { value },
    } = e;

    setSearch(value);
  };

  const searchMovie = () => {
    const filterData = data.data.filter(movie =>
      movie.title_kor.includes(search)
    );
    setShowData(
      filterData === 0
        ? wholeData
        : search === '' // 검색어 입력 안했을 때 기존 페이지의 영화 리스트 보여줌
        ? wholeData
        : filterData && filterData
    );
  };

  // useEffect(() => {
  //   const getSearchData = async () => {
  //     try {
  //       const { data: result } = await axios.get(`http://127.0.0.1:8000/movie`);
  //       setWholeData(result);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   setLoading(true);
  //   getSearchData();
  // }, []);

  useEffect(() => {
    data && searchMovie();
  }, [search, wholeData]);

  useEffect(() => {
    data && setWholeData(data.data);
  }, [data, wholeData]);

  // const getApi = async () => {
  //   const res = await fetch('http://127.0.0.1:8000/movie/');

  //   return await res.json();
  // };

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <InputBox>
            <Input value={search} onChange={handleSearch} />
          </InputBox>
          <Result>
            {showData.map(movie => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <Box>
                  <BoxImg src={movie.poster_url}></BoxImg>
                  <MainTitle>{movie.title_kor}</MainTitle>
                </Box>
              </Link>
            ))}
          </Result>
        </Content>
      )}
    </Wrapper>
  );

  // return <>{loading ? <Loading /> : <Search data={data} />}</>;
};

export default SearchPage;
