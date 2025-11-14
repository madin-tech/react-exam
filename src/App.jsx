import React from 'react'
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App