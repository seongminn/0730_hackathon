import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Detail from '../components/Detail/Detail';
import Loading from '../components/Loading/Loading';
import { rawdata } from './rawdata';

function DetailPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function getDetailData() {
  //     try {
  //       const { data: result } = await axios.get(
  //         'https://334e6eae-a450-4bd1-93ba-cd6f24271194.mock.pstmn.io/movie/1'
  //       );
  //       setData(result);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   setLoading(true);
  //   getDetailData();
  // }, []);

  // return <>{loading ? <Loading /> : <Detail data={data} />}</>;
  return <>{loading ? <Loading /> : <Detail data={rawdata} />}</>;
}

export default DetailPage;
