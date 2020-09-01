import React from 'react';
import Navbar from './Navbar';

import {} from '../assets/components/Hero.css';
const Hero = () => {
    return (
      <div className="hero">
        <Navbar/>
        <div className="contenedor">
          <div className="contenido">
            <h1 className="titulo">Alejandro Barba</h1>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    );
}
 
export default Hero;
