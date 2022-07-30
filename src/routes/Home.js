import { useQuery } from 'react-query';
import styled from 'styled-components';
import { datas, getMovie } from '../api';
import MainSlider from '../components/Main/MainSlider';
import MainPoster from '../components/Main/MainPoster';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // const { data, isLoading } = useQuery(['movies'], getMovie);
  useEffect(() => {
    setLoading(true);
    const getMovie = async () => {
      await axios
        .get(`http://127.0.0.1:8000/movie/`)
        .then(res => {
          setData([...res.data]);
          setLoading(false);
        })
        .catch(err => console.log(err));
    };

    getMovie();
  }, []);

  console.log(data);

  return (
    <Wrapper>
      <MainPoster />

      <MainSlider data={data} />
    </Wrapper>
  );
};

export default Home;
