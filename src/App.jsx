import React, {  useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";
import Liked from "./pages/Liked";
import { Newcontext } from "./Newcontext/Newcontext";

const App = () => {
const [liked, setLiked] = useState([]);
  return (
    <>
      <Newcontext.Provider value={{ liked, setLiked }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/likes" element={<Liked />} />
          </Route>
        </Routes>
      </Newcontext.Provider>
    </>
  );
};

export default App;
