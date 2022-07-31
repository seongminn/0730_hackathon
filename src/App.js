import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/fonts/fonts.css';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import Nav from './components/Common/Nav';
import DetailPage from './pages/DetailPage';
<<<<<<< HEAD
import Footer from './components/Common/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
=======
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
>>>>>>> df61cbcbb2d2b5acdb7408975ea9f3589aed821b

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

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
