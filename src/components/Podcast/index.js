import React from "react";
import axios from "axios";
import SinglePodcast from "../SinglePodcast";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [limit , setLimit]= useState(20);
  const [search, setSearch] = useState("all");
  const [isLoading , setIsLoading]= useState(false);

  useEffect(() => {
    getPodcasts();
  }, [limit, search]);

  const getPodcasts = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/podcasts?search=${search}&limit=${limit}`
    );
    setPodcasts(response.data);
    setIsLoading(false);
  };

  return (
    <div className="podCastContainer">
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
