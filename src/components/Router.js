import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Detail from '../routes/Detail';
import Home from '../routes/Home';
import Footer from './Main/Footer';
import Nav from './Main/Nav';

const RouterWrapper = styled.div``;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />

      <RouterWrapper>
        <Routes>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </RouterWrapper>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
