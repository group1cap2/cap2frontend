import React from "react";
import { Link } from "react-router-dom";
import {CgProfile} from "react-icons/cg"
import {ImMusic} from "react-icons/im"
import {ImHome} from "react-icons/im"
import {TiVideo} from "react-icons/ti"
import {ImBook} from "react-icons/im"
import {FaPodcast , FaSearch} from "react-icons/fa"
import{MdFavorite} from "react-icons/md"
import './style.css'

const Nav = () => {
  return (

    <div className="sidenav">
    <ul id="nav">
      <li>
        <Link id="active" to="/"><ImHome/></Link>
      </li>
      <li>
        <Link to="/Audio"><CgProfile /></Link>
      </li>
      <li>
        <Link to="/Audio"><ImMusic/></Link>
      </li>

      <li>
        <Link to="/Video">< TiVideo/></Link>
      </li>
    
      <li>
        <Link to="/Video"><FaPodcast/></Link>
      </li>
      <li>
        <Link to="/Video"><ImBook/></Link>
      </li>
      <li>
        <Link to="/Video"><FaSearch/></Link>
      </li>
      <li>
        <Link to="/Video"><MdFavorite/></Link>
      </li>
    </ul>
  </div>

  );
}
export default Nav







 
// <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={styles}>
// <Nav.Home eventKey="home" icon={<Home />}>
//   Home
// </Nav.Home>
// <Nav.Audio eventKey="Audio" icon={<Audio />}>Audio</Nav.Audio>
// </Nav>