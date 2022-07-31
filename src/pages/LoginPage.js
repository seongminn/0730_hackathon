import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Login from '../components/Login/Login';
import { useRecoilValue, useRecoilState } from 'recoil';
import { checkLoginState, loginState } from './../atom';
import Loading from '../components/Loading/Loading';

function LoginPage() {
  const login = useRecoilValue(loginState);
  const [checked, setChecked] = useRecoilState(checkLoginState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function postLoginData() {
      try {
        await axios
          .post('http://127.0.0.1:8000/account/login', login)
          .then(res => {
            // console.log(res);

            setChecked(true);
            setLoading(false);
          });
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(true);
    if (login.username !== '') postLoginData();
  }, [login]);

  return <Login />;
}

export default LoginPage;
