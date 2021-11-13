import React from "react";
import axios from "axios";
import SingleMusic from "../SingleMusic";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Music = () => {
  const [music, setMusic] = useState([]);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  let added = false;
  useEffect(() => {
    getMusic();
  }, [limit, search]);

  const getMusic = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/music?search=${search}&limit=${limit}`
    );
    setMusic(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getFavMusic();
  }, []);
  const [musicFav, setmusicFav] = useState([]);
  const getFavMusic = async () => {
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/getMoviesFavorite`
    );
    setmusicFav(response.data);
  };
  const setFav = (music) => {
    musicFav.forEach((musicFav) => {
      if (musicFav.trackId === music.trackId) {
        added = true;
      } else {
        added = false;
      }
    });
  };

  return (
    <div className="audioContainer">
      <div className="banner">
        <div className="searchBar">
          <input
            id="searchQueryInput"
            type="text"
            placeholder="What are you looking for?"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button id="searchQuerySubmit" type="submit">
            <FaSearch />{" "}
          </button>
        </div>
      </div>
      {/* banner end */}

      <div className="audio">
        {music.map((elem, i) => {
          setFav(elem);
          return (<SingleMusic elem={elem} added={added} key={i}/>);
        })}
      </div>
      <div className="loadMore">
        <button
          onClick={() => {
            setLimit(limit + 4);
          }}
          className="vewMoreBtn"
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};
export default Music;
