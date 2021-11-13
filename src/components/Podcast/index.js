import React from "react";
import axios from "axios";
import SinglePodcast from "../SinglePodcast";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [limit , setLimit]= useState(20);
  const [isLoading , setIsLoading]= useState(false);
  useEffect(() => {
    getPo();
  }, [limit]);
  const getPo = async () => {
    const response = await axios.get(
      "http://itunes.apple.com/search?term=s&country=sa&media=podcast&limit=20".replace('20', limit)
    );
    setPodcasts(response.data.results);
  };

  return (
    <div className="podCastContainer">
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

      <div className="singleCard">
        {podcasts.map((elem,i) => (
          <SinglePodcast elem={elem} key={i}/>
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
export default Podcast;
