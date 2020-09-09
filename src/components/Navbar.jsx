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
  function hideMenu(){
    const menu = document.querySelector("#navbar");
    // console.log(menu);
    if(menu.classList.contains("navbar__options--showMenu")){
      menu.classList.remove("navbar__options--showMenu");
    }
    
  }
  return (
    <nav className="navbar">
      <img
        className="navbar__burger"
        alt=""
        src={require("../assets/img/menu_blanco.png")}
        onClick={showMenu}
      />
      <div className="navbar__content">
        <a href="/#" className="navbar__logo">
          &lt; Alejandro /&gt;
        </a>
        {/* navbar__options--showMenu */}
        <ul className="navbar__options" id="navbar">
          <li className="navbar__option">
          <Link  onClick={hideMenu} to="/" className="navbar__option-ahref">Home</Link>
          </li>
          <li className="navbar__option">
            <Link  onClick={hideMenu} to="/aboutme" className="navbar__option-ahref">About Me</Link>
          </li>
          <li className="navbar__option">
          <Link  onClick={hideMenu} to="/portfolio" className="navbar__option-ahref">Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
