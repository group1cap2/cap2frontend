import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { ImMusic, ImHome,ImBook  } from "react-icons/im";
import { MdMovieCreation } from "react-icons/md";
import { FaPodcast, FaSearch } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import "./style.css";

const Nav = () => {
  return (
    <div className="sidenav">
      <div>
        <ul>
        <li>
          <Link id="active" to="/">
            <ImHome />
          </Link>
        </li>
        </ul>
      </div>
      <ul id="nav">

        <li>
          <Link to="/Audio">
            <ImMusic />
          </Link>
        </li>

        <li>
          <Link to="/Video">
            <MdMovieCreation />
          </Link>
        </li>

        <li>
          <Link to="/Podcast">
            <FaPodcast />
          </Link>
        </li>
        <li>
          <Link to="/Ebook">
            <ImBook />
          </Link>
        </li>
        {/* <li>
          <Link to="/Search">
            <FaSearch />
          </Link>
        </li> */}
        <li>
          <Link to="/Fav">
            <MdFavorite />
          </Link>
        </li>
      </ul>
      <div>
        <ul>
        <li>
          <Link to="/Login">
            <CgProfile />
          </Link>
        </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
