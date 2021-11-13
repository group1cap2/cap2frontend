import React from "react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import "./style.css";
const Login = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
<div className="login">
        <div className="wrapper fadeInDown">
      <div id="formContent">
      <h2 onClick={handleToggle} className={isActive ? "active" : "inactive underlineHover"} >Sign In</h2>
      <h2   onClick={handleToggle} className={isActive ?  "inactive underlineHover" : "active" } >Sign Up </h2>
        {/* <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2> */}
        <div className="fadeIn first">
          <CgProfile id="icon" />
        </div>
        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="name"
            placeholder="User Name"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Enter" />
        </form>
      </div>
      </div>
      </div>
    
  );
};

export default Login;
