import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Login from '../components/Login/Login';
import { useRecoilValue } from 'recoil';
import { loginState } from './../atom';

function LoginPage() {
  const login = useRecoilValue(loginState);

  console.log(login);

  return <Login />;
}

export default LoginPage;
