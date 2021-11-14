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

  useEffect(() => {
    getFavMovies();
  }, []);

  const getFavMovies = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `http://localhost:5000/getMoviesFavorite`
    );
    setMoviesFav(response.data);
    setIsLoading(false);
  };

  // const setFav = (movie) => {
  //   moviesFav.forEach((movieFav) => {
  //     if (movieFav.trackId === movie.trackId) {
  //       return  true;
  //     } else {
  //       return false;
  //     }
  //   });
  // };

  useEffect(() => {
    getMovies();
  }, [limit, search]);

  const getMovies = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `http://localhost:5000/movies?search=${search}&limit=${limit}`
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
        {movies.map((elem) => {
          if (moviesFav.find(movie => movie.trackId == elem.trackId)){
            return <SingleMovie elem={elem} like={true} key={elem.trackId} />;
          } else {
            return <SingleMovie elem={elem} like={false} key={elem.trackId} />;
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
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};
export default Movies;
