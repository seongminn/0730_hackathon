import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Login from '../components/Login/Login';
import { useRecoilValue, useRecoilState } from 'recoil';
import { checkLoginState, loginState } from './../atom';

function LoginPage() {
  const login = useRecoilValue(loginState);
  const [checked, setChecked] = useRecoilState(checkLoginState);

  useEffect(() => {
    async function postLoginData() {
      try {
        const data = await axios.post('url', login).then(res => {
          console.log(res);
          setChecked(!checked);
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(true);
    postLoginData();
  }, []);

  return <>{loading ? <Loading /> : <Login />}</>;
}

export default LoginPage;
