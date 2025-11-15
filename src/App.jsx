import React from 'react'
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Detail from './pages/Detail';
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App