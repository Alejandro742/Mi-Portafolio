import React from "react";
import {} from '../assets/components/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contenedor">
        <p className="footer__copyright">
          Hecho por <strong>Aejandro Barba</strong> &copy; 2020
        </p>
        <div className="footer__redes">
          <a 
            href="https://twitter.com/Alejand78666280"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/alejandro-barba-garc%C3%ADa-355090198/"
            target="_blank" rel="noopener noreferrer"  
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com/Alejandro742"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:alejandrobarba742@gmail.com"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
