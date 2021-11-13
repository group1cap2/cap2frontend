import React from "react";
import axios from "axios";
import SingleBook from "../SingleBook";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Ebook = () => {
  const [books, setBooks] = useState([]);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  let added = false;
  useEffect(() => {
    getBooks();
  }, [limit]);

  const getBooks = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/books?search=${search}&limit=${limit}`
    );
    setBooks(response.data);
    setIsLoading(false);
  };

  const [booksFav, setBooksFav] = useState([]);
  const getFavBooks = async () => {
    const response = await axios.get(
      `https://group1-cap2backend.herokuapp.com/getMoviesFavorite`
    );
    setBooksFav(response.data);
  };
  const setFav = (book) => {
    booksFav.forEach((bookFav) => {
      if (bookFav.trackId === book.trackId) {
        added = true;
      } else {
        added = false;
      }
    });
  };
  return (
    <div className="bookContainer">
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
        {books.map((elem, i) => {
          setFav(elem);
          return (<SingleBook elem={elem} added={added} key={i}/>);
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
export default Ebook;
