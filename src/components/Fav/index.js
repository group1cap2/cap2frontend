import React from "react";
import axios from "axios";
import SingleBook from "../SingleBook";
import SingleMusic from "../SingleMusic";
import SingleMovie from "../SingleMovie";
import SinglePodcast from "../SinglePodcast";
import { useState, useEffect } from "react";
import "./style.css";

const Fav = () => {
  const [favAduio, setFavAudio] = useState([]);
  const [favPodcast, setFavPodcast] = useState([]);
  const [favEbook, setFavEbook] = useState([]);
  const [favMovie, setFavMovie] = useState([]);
  let like = false;

  useEffect(() => {
    getFavAudio();
  }, []);

  const getFavAudio = async () => {
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/getMusicFavorite`
    );
    setFavAudio(response.data);
  };

  useEffect(() => {
    getFavPodcast();
  }, []);

  const getFavPodcast = async () => {
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/getPodcastsFavorite`
    );
    setFavPodcast(response.data);

  };

  useEffect(() => {
    getFavEbook();

  },[]);

  const getFavEbook = async () => {
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/getBooksFavorite`
    );
    setFavEbook(response.data);
   
  };

  useEffect(() => {
    getFavMovie();
  }, []);

  const getFavMovie = async () => {
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/getMoviesFavorite`
    );
    setFavMovie(response.data);
  };


  return (
    <div className="FavContainer">
      <div className="bannerFav"></div>
      {/* banner end */}

      {/* Movie */}
      {favMovie.length !== 0 ? (
        <div className="singleCard">
          {favMovie.map((elem, i) => {
            return <SingleMovie elem={elem} delete={true} key={`m` + i} />;
          })}
        </div>
      ) : (
        ""
      )}

      {/* Audio */}
      {favAduio.length !== 0 ? (
        <div className="singleCard">
          {favAduio.map((elem, i) => (
            <SingleMusic elem={elem} delete={true} key={`a` + i} />
          ))}
        </div>
      ) : (
        ""
      )}

      {/* Ebook */}
      {favEbook.length !== 0 ? (
        <div className="singleCard">
          {favEbook.map((elem, i) => 
           
          (  <SingleBook elem={elem} delete={true} key={`b` + i} />)
)}
        </div>
      ) : (
        ""
      )}

      {/* Podcast */}
      {favPodcast.length !== 0 ? (
        <div className="singleCard">
          {favPodcast.map((elem, i) => (
            <SinglePodcast elem={elem} delete={true} key={`p` + i} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Fav;
