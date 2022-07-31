import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { searchState } from '../atom';
import Detail from '../components/Detail/Detail';
import Loading from './../components/Loading/Loading';
import Search from '../components/Search/Search';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useRecoilState(searchState);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const { data: result } = await axios.get(
          `http://127.0.0.1:8000/movie/?search_movie=${search}`
        );
        setData(result);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    setLoading(true);
    getSearchData();
  }, [search]);

  console.log(data);

  return <Wrapper>{loading ? <Loading /> : <Search data={data} />}</Wrapper>;

  // return <>{loading ? <Loading /> : <Search data={data} />}</>;
};

export default SearchPage;
