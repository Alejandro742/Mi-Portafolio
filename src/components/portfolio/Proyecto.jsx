import React, { Fragment } from "react";
import {} from "../../assets/components/Proyecto.css";

const Proyecto = ({ proyecto }) => {
  const { titulo, descripcion, src, github } = proyecto;
  return (
    <Fragment>
      <div className="proyecto">
        <img src={require(`../../assets/img/${src}`)} alt={titulo} />
        <div className="proyecto-contenido">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <a
            href={github}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Más en GitHub
          </a>
        </div>
      </div>
      
    </Fragment>
  );
};

export default Proyecto;
