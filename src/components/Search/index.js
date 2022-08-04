import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { searchState } from '../../atom';
import Loading from '../loading';
import Search from './result';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Content, Input, InputBox, Page, Result } from './styled';
import Pagination from './pagination';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SearchPage = () => {
  const [wholeData, setWholeData] = useState([]);
  const [curData, setCurData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    const {
      target: { value },
    } = e;

    setSearch(value);
  };

  const searchMovie = () => {
    const filterData = wholeData.filter(movie =>
      movie.title_kor.includes(search)
    );
    console.log(filterData.length);
    setShowData(
      filterData === 0
        ? curData
        : search === '' // 검색어 입력 안했을 때 기존 페이지의 영화 리스트 보여줌
        ? curData
        : filterData && filterData
    );
  };

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const { data: result } = await axios.get(`http://127.0.0.1:8000/movie`);
        setWholeData(result);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    setLoading(true);
    getSearchData();
  }, []);

  useEffect(() => {
    searchMovie();
  }, [search]);

  // const getApi = async () => {
  //   const res = await fetch('http://127.0.0.1:8000/movie/');

  //   return await res.json();
  // };

  // const { data, isLoading: loading } = useQuery(['moviedata'], getApi);

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
              <div key={movie.id}>{movie.title_kor}</div>
            ))}
          </Result>
        </Content>
      )}
    </Wrapper>
  );

  // return <>{loading ? <Loading /> : <Search data={data} />}</>;
};

export default SearchPage;
