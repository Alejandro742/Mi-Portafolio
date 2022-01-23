import React from 'react';
import Navbar from './Navbar';

import {} from '../assets/components/Hero.css';
const Hero = () => {
    return (
      <div className="hero">
        <div className="hero__shadow">
        <Navbar/>
          <div className="contenido center-hero">
            <img src={require('../assets/img/perfil.jpg')} className="hero__img" alt="prfil_img"/>
            <h1 className="titulo">Alejandro Barba</h1>
            <p className="hero__about">I am web developer based in Jalisco - Mexico, I am passionate about tech and learning new things about web development.</p>
          </div>

        </div>
      </div>
    );
}
 
export default Hero;
