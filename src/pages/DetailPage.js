import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Detail from '../components/Detail/Detail';
import Loading from '../components/Loading/Loading';
import { rawdata } from './rawdata';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getDetailData() {
      try {
        const { data: result } = await axios.get(
          `http://127.0.0.1:8000/movie/${id}`
        );
        setData(result);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(true);
    getDetailData();
  }, []);

  return <>{loading ? <Loading /> : <Detail data={data} />}</>;
  // return <>{loading ? <Loading /> : <Detail data={rawdata} />}</>;
}

export default DetailPage;
