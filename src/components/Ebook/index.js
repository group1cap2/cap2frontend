import React from "react";
import axios from "axios";
import SingleAudio from "../SingleAudio";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Ebook = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    getPo();
  }, []);
  const getPo = async () => {
    const response = await axios.get(
      "http://itunes.apple.com/search?term=s&country=sa&media=ebook&limit=20"
    );
    setMusic(response.data.results);
  };

  return (
    <div className="audioContainer">
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
          <SingleAudio elem={elem} key={i}/>
        ))}
      </div>
    </div>
  );
};
export default Ebook;
