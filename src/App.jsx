import React from 'react'
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Detail from './pages/Detail';
import Liked from './pages/Liked';
import { Context } from './context/Context';
const App = () => {
  return (
    <>
      <context.Provider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/likes" element={<Liked />} />
          </Route>
        </Routes>
      </context.Provider>
    </>
  );
}

export default App