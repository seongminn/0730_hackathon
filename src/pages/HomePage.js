import styled from 'styled-components';
import MainSlider from '../components/Main/MainSlider';
import MainPoster from '../components/Main/MainPoster';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // const { data, isLoading } = useQuery(['movies'], getMovie);

  useEffect(() => {
    async function getMovie() {
      try {
        const { data } = await axios.get(
          'https://334e6eae-a450-4bd1-93ba-cd6f24271194.mock.pstmn.io/movie/movielist'
        );
        setData(data.movies);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(true);
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

export default HomePage;
