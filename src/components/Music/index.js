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
  const [pageLoading, setPageLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [audioFav, setFavAudio] = useState([]);

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
    setLimit(20);
    getMusic();
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    moreMusic();
    // eslint-disable-next-line
  }, [limit]);

  const getMusic = async () => {
    setPageLoading(true);
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/music?search=${search}&limit=${limit}`
    );
    setMusic(response.data);
    setPageLoading(false);
  };

  const moreMusic = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/music?search=${search}&limit=${limit}`
    );
    setMusic(response.data);
    setIsLoading(false);
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

      {!pageLoading ? (
        <>
          <div className="audio">
            {music.map((elem) => {
              if (audioFav.find((song) => song.trackId === elem.trackId)) {
                return (
                  <SingleMusic elem={elem} like={true} key={elem.trackId} />
                );
              } else {
                return (
                  <SingleMusic elem={elem} like={false} key={elem.trackId} />
                );
              }
            })}
          </div>

          <div className="loadMore">
            <button
              onClick={() => {
                setLimit(limit + 4);
              }}
              className="vewMoreBtn"
            >
              {isLoading ? "Lodaing..." : "Load More"}
            </button>
          </div>
        </>
      ) : (
        <div className="loading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Music;
