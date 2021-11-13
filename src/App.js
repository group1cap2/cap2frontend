import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Audio from "./components/Audio";
import Video from "./components/Video";
import Ebook from "./components/Ebook";
import Podcast from "./components/Podcast";
import Login from "./components/Login";
import Search from "./components/Search";
import Fav from "./components/Fav";
import Nav from "./components/Nav";
import "./style.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Audio" element={<Audio />} />
        {/* <Route  exact path="/Video" element={<Video/>} />
 <Route  exact path="/Ebook" element={<Ebook/>} />
 <Route  exact path="/Podcast" element={<Podcast/>} />
 <Route  exact path="/Login" element={<Login/>} />
 <Route  exact path="/Search" element={<Search/>} />
 <Route  exact path="/Fav" element={<Fav/>} /> */}
      </Routes>
    </>
  );
};
export default App;
