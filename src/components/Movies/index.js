import React from "react";
import axios from "axios";
import SingleMovie from "../SingleMovie";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [moviesFav, setMoviesFav] = useState([]);

  useEffect(() => {
    getFavMovies();
  }, []);

  const getFavMovies = async () => {
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/getMoviesFavorite`
    );
    setMoviesFav(response.data);
  };

  useEffect(() => {
    setLimit(20);
    getMovies();
  }, [search]);

  useEffect(() => {
    getMovies();
  }, [limit]);

  const getMovies = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/movies?search=${search}&limit=${limit}`
    );
    setMovies(response.data);
    setIsLoading(false);
  };

  return (
    <div className="MoviesContainer">
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

      {!isLoading ? (
        <>
          <div className="audio">
            {movies.map((elem) => {
              if (moviesFav.find((movie) => movie.trackId == elem.trackId)) {
                return (
                  <SingleMovie elem={elem} like={true} key={elem.trackId} />
                );
              } else {
                return (
                  <SingleMovie elem={elem} like={false} key={elem.trackId} />
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
              Load More
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
export default Movies;
