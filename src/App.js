import React from "react";
import { Route, Routes } from "react-router-dom";
import Audio from "./components/Music";
import Movies from "./components/Movies";
import Ebook from "./components/Ebook";
import Podcast from "./components/Podcast";
import Fav from "./components/Fav";
import Nav from "./components/Nav";

import "./style.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route exact path="/Music" element={<Audio />} />
        <Route exact path="/Movies" element={<Movies />} />
        <Route exact path="/Ebook" element={<Ebook />} />
        <Route exact path="/Podcast" element={<Podcast />} />
        <Route exact path="/Fav" element={<Fav />} />
      </Routes>
    </>
  );
};
export default App;
