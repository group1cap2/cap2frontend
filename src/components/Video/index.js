import React from "react";
import axios from "axios";
import SingleMovie from "../SingleMovie";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Video = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    getPo();
  }, []);
  const getPo = async () => {
    const response = await axios.get(
      "http://itunes.apple.com/search?term=s&country=sa&media=movie&limit=20"
    );
    setMusic(response.data.results);
  };

  return (
    <div className="MoviesContainer">
      <div className="banner">
        <div className="searchBar">
          <input
            id="searchQueryInput"
            type="text"
            placeholder="What are you looking for?"
          />
          <button id="searchQuerySubmit" type="submit">
            <FaSearch />{" "}
          </button>
        </div>
      </div>
      {/* banner end */}

      <div className="audio">
        {music.map((elem,i) => (
          <SingleMovie elem={elem} key={i}/>
        ))}
      </div>
    </div>
  );
};
export default Video;
