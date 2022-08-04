import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './globalStyle';
import MainContainer from './components/shared/MainContainer';

import PATH from './constants/path';

import Nav from './components/shared/Nav';
import Home from './components/Main/index';
import Login from './components/auth/login/index';
import Detail from './components/movie/detail';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <MainContainer>
        <Routes>
          <Route path={PATH.MAIN} element={<Home />} />
          <Route path={PATH.LOGIN} element={<Login />} />
          {/* <Route exact path="/search" element={<SearchPage />} /> */}
          <Route path={`${PATH.DETAIL}/:id`} element={<Detail />} />
          {/* <Route path="/allMovies" element={<AllMoviePage />} /> */}
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
