import React from "react";
import {} from '../assets/components/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="widget">
          <h3>Contacto</h3>
          <p>Tel: 3118478456</p>
          <p>Correo: alejandrobarba742@gmail.com</p>
          <p><a href="https://www.linkedin.com/in/alejandro-barba-garc%C3%ADa-355090198/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
        <div className="widget">
          <h3>Sobre Mí</h3>
          <p className="about-me">Mi nombre es Alejandro Barba, estudiante en Ingeniería en Computación en UDG, tengo 21 años y soy un apasionado por la programación, tecnología y enseñanza. Tengo aproximadamente 1 año de experiencia desarrollando aplicaciones web de manera personal, y un proyecto para la universidad (Asesorías Universitarias).
          Me oriento más a lado del Backend, pero siempre trato de estar actualizado en FrontEnd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
