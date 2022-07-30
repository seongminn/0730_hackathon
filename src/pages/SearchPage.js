import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams.get('keyword');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const { data: result } = await axios.get(
          `http://127.0.0.1:8000/movie/search?keyword=${keyword}`
        );
        setData(result);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    setLoading(true);
    getSearchData();
  }, [keyword]);
  console.log(keyword);
  return;
};

export default Search;
