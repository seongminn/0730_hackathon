import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DetailPage from './pages/DetailPage';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Nav from './components/Main/Nav';
import Footer from './components/Main/Footer';
import HomePage from './pages/HomePage';

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
		background-color: black;
		color: #fff;
	}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
