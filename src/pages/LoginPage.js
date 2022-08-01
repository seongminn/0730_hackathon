import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Login from '../components/Login/Login';
import { useRecoilValue, useRecoilState } from 'recoil';
import { checkLoginState, loginState, tokenState } from './../atom';
import Loading from '../components/Loading/Loading';

function LoginPage() {
  const login = useRecoilValue(loginState);
  const [checked, setChecked] = useRecoilState(checkLoginState);
  // const [token, setToken] = useRecoilState(tokenState);
  const [loading, setLoading] = useState(false);

  return <Login />;
}

export default LoginPage;

/*
{
  "username": "user",
  "password": "1234"
}
*/
