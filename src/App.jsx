import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageIndex from './pages/PageIndex';
import PageDetails from './pages/PageDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageIndex />}></Route>
          <Route path="/character/:id" element={<PageDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
