import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Detail from './detail';
import detailAPI from './../../apis/detailAPI';
import rawdata from './rawdata';

function DetailPage() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   async function getDetailData() {
  //     try {
  //       const data = await detailAPI.getDetail(id);
  //       setData(data);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getDetailData();
  // }, []);

  // useEffect(() => {
  //   async function getDetailData() {
  //     try {
  //       const new_data = { ...rawdata, split_genre: rawdata.genre.split(',') };
  //       setData(new_data);
  //       // console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getDetailData();
  // }, []);

  return <Detail data={rawdata} />;
}

export default DetailPage;
