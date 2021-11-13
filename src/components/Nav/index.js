import React from "react";
import { Link } from "react-router-dom";
import { ImMusic, ImBook } from "react-icons/im";
import { MdMovieCreation } from "react-icons/md";
import { FaPodcast, FaItunes } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import "./style.css";

const Nav = () => {
  return (
    <div className="sidenav">
      <div>
        <ul>
          <li>
            <FaItunes id="active" />
          </li>
        </ul>
      </div>
      <ul id="nav">
        <li>
          <Link to="/Movies">
            <MdMovieCreation />
          </Link>
        </li>
        <li>
          <Link to="/Music">
            <ImMusic />
          </Link>
        </li>
        <li>
          <Link to="/Ebook">
            <ImBook />
          </Link>
        </li>
        <li>
          <Link to="/Podcast">
            <FaPodcast />
          </Link>
        </li>
        <li></li>
      </ul>
      <div>
        <ul>
          <li>
            <Link to="/Fav">
              <MdFavorite />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
