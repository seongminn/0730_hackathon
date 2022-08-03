import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './globalStyle';
import MainContainer from './components/shared/MainContainer';

import PATH from './constants/path';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <MainContainer>
        <Routes>
          <Route path={PATH.MAIN} element={<HomePage />} />
          {/* <Route exact path="/search" element={<SearchPage />} /> */}
          <Route path={`${PATH.DETAIL}/:id`} element={<DetailPage />} />
          {/* <Route path="/allMovies" element={<AllMoviePage />} /> */}
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
