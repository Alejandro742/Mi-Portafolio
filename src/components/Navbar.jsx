import React from "react";
import {Link} from 'react-router-dom';
import {} from "../assets/components/Navbar.css";


const Navbar = () => {
  function showMenu(e){
    const navbar = document.querySelector("#navbar");
    if(navbar.classList.contains("navbar__options--showMenu")){
      navbar.classList.remove("navbar__options--showMenu");
    }else{
      navbar.classList.add("navbar__options--showMenu");
    }
  }
  return (
    <nav className="navbar">
      <img
        className="navbar__burger"
        alt=""
        src={require("../assets/img/menu.png")}
        onClick={showMenu}
      />
      <div className="navbar__content">
        <a href="/#" className="navbar__logo">
          &lt; Alejandro /&gt;
        </a>
        {/* navbar__options--showMenu */}
        <ul className="navbar__options" id="navbar">
          <li className="navbar__option">
          <Link to="/" className="navbar__option-ahref">Home</Link>
          </li>
          <li className="navbar__option">
            <Link to="/aboutme" className="navbar__option-ahref">Aboutme</Link>
          </li>
          <li className="navbar__option">
          <Link to="/portfolio" className="navbar__option-ahref">Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
