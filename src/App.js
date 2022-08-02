import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/fonts/fonts.css';

import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import HomePage from './components/Main';
import SearchPage from './components/Search';
import Nav from './components/Common/nav';
import DetailPage from './components/movie';
import Login from './components/auth/login';
import RegisterPage from './components/auth/register';
import AllMoviePage from './components/AllMovie';

import { useRecoilValue } from 'recoil';
import { loginState } from './atom';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background: black;
    color: white;
    font-family: "BMHANNAAir", sans-serif;
    font-size: 1.2rem;
  }
`;

const RouterWrapper = styled.div``;
const Template = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  // const login = useRecoilValue(loginState);
  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storage = window.localStorage.getItem('loginId');
  //   console.log(storage);

  //   setLoggedIn(storage ? true : false);
  // }, [login]);

  // useEffect(() => {}, [login]);

  // window.sessionStorage.clear();

  return (
    <Template>
      <GlobalStyle />
      <Nav />
      <RouterWrapper>
        <Routes>
          {/* {loggedIn ? ( */}
          <>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route path="/movie/:id" element={<DetailPage />} />
            <Route path="/allMovies" element={<AllMoviePage />} />
          </>
          {/* ) : ( */}
          {/* <>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
            </> */}
          {/* )} */}
        </Routes>
      </RouterWrapper>
    </Template>
  );
}

export default App;
