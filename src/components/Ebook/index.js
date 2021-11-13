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
        {books.map((elem, i) => (
          <SingleBook elem={elem} key={i} />
        ))}
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
