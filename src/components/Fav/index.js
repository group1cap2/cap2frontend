import React from "react";
import axios from "axios";
import SingleBook from "../SingleBook";
import SingleAudio from "../SingleAudio";
import SingleMovie from "../SingleMovie";
import SinglePodcast from "../SinglePodcast";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Fav = () => {
  const [fav, setFav] = useState([]);
  const [limit , setLimit]= useState(20);
const [isLoading , setIsLoading]= useState(false);
  useEffect(() => {
    getPo();
  }, [limit]);
  const getPo = async () => {
    const response = await axios.get(
      'http://itunes.apple.com/search?term=s&country=sa&media=ebook&limit=20'.replace('20', limit)
    );
    setFav(response.data.results);
  };

  return (
    <div className="bookContainer">
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
        {fav.map((elem,i) => (
          <SingleBook elem={elem} key={i}/>
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
export default Fav;
