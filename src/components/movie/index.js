import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Detail from './detail';
import detailAPI from './../../apis/detailAPI';

function DetailPage() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getDetailData() {
      try {
        const data = await detailAPI.getDetail(id);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    getDetailData();
  }, []);

  return <Detail data={data} />;
}

export default DetailPage;
