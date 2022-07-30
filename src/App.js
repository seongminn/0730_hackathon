import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DetailPage from './routes/DetailPage';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decorations: noen;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
