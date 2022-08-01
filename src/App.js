import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/fonts/fonts.css';

import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import Nav from './components/Common/nav';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useRecoilState, useRecoilValue } from 'recoil';
import { checkLoginState, loginState } from './atom';
import AllMoviePage from './pages/AllMoviePage';

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

function App() {
  const login = useRecoilValue(loginState);
  const checked = useRecoilValue(checkLoginState);

  // const logedIn = window.sessionStorage.getItem('loginId');
  // window.sessionStorage.clear();

  return (
    <>
      <GlobalStyle />
      <Nav />
      <RouterWrapper>
        <Routes>
          {login ? (
            <>
              <Route exact path="/search" element={<SearchPage />} />
              <Route path="/movie/:id" element={<DetailPage />} />
              <Route path="/allMovies" element={<AllMoviePage />} />

              <Route path="/" element={<HomePage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}
        </Routes>
      </RouterWrapper>
    </>
  );
}

export default App;
