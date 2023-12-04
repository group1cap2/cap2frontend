import React from "react";
import axios from "axios";
import SingleBook from "../SingleBook";
import SingleMusic from "../SingleMusic";
import SingleMovie from "../SingleMovie";
import SinglePodcast from "../SinglePodcast";
import { useState, useEffect } from "react";
import "./style.css";

const Fav = () => {

  const [favAudio, setFavAudio] = useState([]);
  const [favPodcast, setFavPodcast] = useState([]);
  const [favEbook, setFavEbook] = useState([]);
  const [favMovie, setFavMovie] = useState([]);

  const [action, setAction] = useState(false);

  useEffect(() => {

    getFavMovie();
    getFavEbook();
    getFavPodcast();
    getFavAudio();

  },[action]);

  const getFavAudio = async () => {

    let response = [];
    try {
      response = await axios.get(
        `https://group1-cap2backend.herokuapp.com/getMusicFavorite`
      );

    } catch (error) {};

    if(response.data) 
    {
      setFavAudio(response.data);
    };
  };

  const getFavPodcast = async () => {

    let response = [];
    try {

      response = await axios.get(
        `https://group1-cap2backend.herokuapp.com/getPodcastsFavorite`
      );

    } catch (error) {};

    if(response.data) 
    {
      setFavPodcast(response.data);
    };
  };

  const getFavEbook = async () => {

    let response = [];
    try {
      response = await axios.get(
        `https://group1-cap2backend.herokuapp.com/getBooksFavorite`
      );
    } catch (error) {};

    if(response.data) 
    {
      setFavEbook(response.data);
    };
  };

  const getFavMovie = async () => {

    let response = [];
    try {
      response = await axios.get(
        `https://group1-cap2backend.herokuapp.com/getMoviesFavorite`
      );
    } catch (error) {};

    if(response.data) 
    {
      setFavMovie(response.data);
    };
  };

  const reload = async(req) =>
  {
    setAction(!action)
  };

  return (
    <div className="FavContainer">
      <div className="bannerFav"></div>
      {/* banner end */}
      
      {/* Movie */}
      {favMovie.length !== 0 ? (
        <div className="singleCard">
          {favMovie.map((elem, i) => {
            return <SingleMovie elem={elem} delete={true} key={`m` + i} reload= {reload} />;
          })}
        </div>
      ) : (
        ""
      )}

      {/* Audio */}
      {favAudio.length !== 0 ? (
        <div className="singleCard">
          {favAudio.map((elem, i) => (
            <SingleMusic elem={elem} delete={true} key={`a` + i} reload= {reload} />
          ))}
        </div>
      ) : (
        ""
      )}

      {/* Ebook */}
      {favEbook.length !== 0 ? (
        <div className="singleCard">
          {favEbook.map((elem, i) => (
            <SingleBook elem={elem} delete={true} key={`b` + i} reload= {reload}/>
          ))}
        </div>
      ) : (
        ""
      )}

      {/* Podcast */}
      {favPodcast.length !== 0 ? (
        <div className="singleCard">
          {favPodcast.map((elem, i) => (
            <SinglePodcast elem={elem} delete={true} key={`p` + i} reload= {reload}/>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Fav;
