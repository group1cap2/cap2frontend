import React from "react";
import axios from "axios";
import SingleAudio from "../SingleAudio";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Music = () => {
  const [music, setMusic] = useState([]);
  const [limit , setLimit]= useState(20);
const [isLoading , setIsLoading]= useState(false);
  useEffect(() => {
    getPo();
  }, [limit]);
  const getPo = async () => {
    const response = await axios.get(
      'http://itunes.apple.com/search?term=s&country=sa&media=music&limit=20'.replace('20', limit)
    );
    setMusic(response.data.results);
  };

// const loadMore=()=>{
//   setLimit(limit+5)}
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
      <div className="loadMore">
        <button onClick={()=>{setLimit(limit+4)}} className="vewMoreBtn">
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};
export default Music;
