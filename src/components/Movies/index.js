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
  const [isLoading, setIsLoading] = useState(false);
  const [moviesFav, setMoviesFav] = useState([]);
  let added = false;

  useEffect(() => {
    getFavMovies();
  }, []);

  const getFavMovies = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/getMoviesFavorite`
    );
    setMoviesFav(response.data);
    setIsLoading(false);
  };

  const setFav = (movie) => {
    moviesFav.forEach((movieFav) => {
      if (movieFav.trackId === movie.trackId) {
        added = true;
      } else {
        added = false;
      }
    });
  };

  useEffect(() => {
    getMovies();
  }, [limit, search, moviesFav]);

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

      <div className="audio">
        {movies.map((elem, i) => {
          setFav(elem);
          return <SingleMovie elem={elem} added={added} key={i} />;
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
export default Movies;
