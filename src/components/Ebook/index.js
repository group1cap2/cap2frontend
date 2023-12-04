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
  const [pageLoading, setPageLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [ebookFav, setFavEbook] = useState([]);

  useEffect(() => {
    setLimit(20);
    getBooks();
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    moreBooks();
    // eslint-disable-next-line
  }, [limit]);

  useEffect(() => {
    getFavEbook();
  }, []);

  const moreBooks = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://group1-cap2backend.herokuapp.com/books?search=${search}&limit=${limit}`
      );
      setBooks(response.data);

    } catch (error) {}
    setIsLoading(false);
  };

  const getBooks = async () => {
    setPageLoading(true);

    try {

      const response = await axios.get(
        `https://group1-cap2backend.herokuapp.com/books?search=${search}&limit=${limit}`
      );
      setBooks(response.data);

    } catch (error) {
      
    }

    setPageLoading(false);
  };

  const getFavEbook = async () => {
    try {
      const response = await axios.get(
        `https://group1-cap2backend.herokuapp.com/getBooksFavorite`
      );
      setFavEbook(response.data);
    } catch (error) {
      
    }

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

      {!pageLoading ? (
        <>
          <div className="singleCard">
            {books.map((elem) => {
              if (ebookFav.find((book) => book.trackId === elem.trackId)) {
                return (
                  <SingleBook elem={elem} like={true} key={elem.trackId} />
                );
              } else {
                return (
                  <SingleBook elem={elem} like={false} key={elem.trackId} />
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
              {isLoading ? "Lodaing..." : "Load More"}
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
export default Ebook;
