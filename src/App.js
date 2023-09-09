import React from "react";
import { data } from "./data";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import List from "./component/List";
import Birthday from "./component/Birthday";
import Home from "./component/Home";
import Error from "./component/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/bd" element={<Birthday/>} />
        <Route element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
