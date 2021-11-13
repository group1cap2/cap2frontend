import React from "react";
import axios from "axios";
import SingleBook from "../SingleBook";
import SingleAudio from "../SingleAudio";
import SingleMovie from "../SingleMovie";
import SinglePodcast from "../SinglePodcast";
import { useState, useEffect } from "react";
import "./style.css";

const Fav = () => {
const [favAduio, setFavAudio] = useState([]);
  const [favPodcast, setFavPodcast] = useState([]);
  const [favEbook, setFavEbook] = useState([]);
  const [favMovie, setFavMovie] = useState([]);


  useEffect(() => {
    getFavAudio();
  }, []);
  const getFavAudio = async () => {
    const response = await axios.get(
      "http://itunes.apple.com/search?term=s&country=sa&media=music&limit=3"
    );
    setFavAudio(response.data.results);
  };


  useEffect(() => {
    getFavPodcast();
  }, []);
  const getFavPodcast = async () => {
    const response = await axios.get(
      "http://itunes.apple.com/search?term=s&country=sa&media=podcast&limit=1"
    );
    setFavPodcast(response.data.results);
  };

  useEffect(() => {
    getFavEbook();
  }, []);
  const getFavEbook = async () => {
    const response = await axios.get(
      "http://itunes.apple.com/search?term=s&country=sa&media=ebook&limit=2"
    );
    setFavEbook(response.data.results);
  };

  useEffect(() => {
    getFavMovie();
  }, []);
  const getFavMovie = async () => {
    const response = await axios.get(
      "http://itunes.apple.com/search?term=s&country=sa&media=movie&limit=5"
    );
    setFavMovie(response.data.results);
  };

  return (
    <div className="bookContainer">
      <div className="banner"></div>
      {/* banner end */}

      {/* Audio */}
      {favPodcast.length != 0?
      <div className="singleCard">
        {favAduio.map((elem, i) => (
          <SingleAudio elem={elem} key={`a` + i} />
        ))}
    </div>:""}
      {/* Movie */}
      {favPodcast.length != 0?
      <div className="singleCard">
        {favMovie.map((elem, i) => (
          <SingleMovie elem={elem} key={`m` + i} />
        ))}
          </div>:""}
      {/* Ebook */}
      {favPodcast.length != 0?
      <div className="singleCard">
        {favEbook.map((elem, i) => (
          <SingleBook elem={elem} key={`b` + i} />
        ))}
         
      </div>:""}

      {/* Podcast */}
      {favPodcast.length != 0?
      <div className="singleCard">
        {favPodcast.map((elem, i) => (
          <SinglePodcast elem={elem} key={`p` + i} />
        ))}
      </div>:""
      }
    </div>
  );
};
export default Fav;
