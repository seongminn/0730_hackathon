import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from '../components/Register/Register';
import { useRecoilValue } from 'recoil';
import { registerState } from './../atom';

function RegisterPage() {
  const register = useRecoilValue(registerState);

  useEffect(() => {
    async function postLoginData() {
      try {
        await axios
          .post('http://127.0.0.1:8000/account/signup', register)
          .then(res => {
            // console.log(res);
          });
      } catch (err) {
        console.log(err);
      }
    }

    postLoginData();
  }, []);

  return <Register />;
}

export default RegisterPage;
