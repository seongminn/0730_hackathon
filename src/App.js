import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/fonts/fonts.css';

import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import HomePage from './components/main';
import SearchPage from './components/search';
import Nav from './components/common/nav';
import DetailPage from './components/movie';
import Login from './components/auth/login';
import RegisterPage from './components/auth/register';
import AllMoviePage from './components/allmovie';

import { useRecoilValue } from 'recoil';
import { loginState } from './atom';
import AuthPage from './components/auth';

const GlobalStyle = createGlobalStyle`
  ${reset}
	body, html {
    margin: 0;
    padding: 0;
  }
  ol, ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
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
		/* overflow: overlay; */
		overflow-x: hidden;
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
            <Route path="/login" element={<AuthPage />} />
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
