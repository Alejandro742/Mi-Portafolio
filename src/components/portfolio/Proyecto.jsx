import React, { Fragment } from "react";
import Tecnologia from '../partials/Tecnologia';
import {} from "../../assets/components/Proyecto.css";

const Proyecto = ({ proyecto }) => {
  const { titulo, descripcion, src, github , tecnologias} = proyecto;
  return (
    <Fragment>
      <div className="proyecto">
        <div className="proyecto__shadow">
          <div className="proyecto__info">
            <p className="proyecto__descripcion">{descripcion}</p>
            <a href={github} className="proyecto__enlace">GitHub</a>
          </div>
        </div>
        <img className="proyecto__img" src={require(`../../assets/proyectos/${src}`)} alt={titulo} />
        <div className="proyecto__contenido">
          <h3 className="proyecto__title">{titulo}</h3>
          <div className="proyecto__tecnologias">
            {tecnologias.map(tec =>(<Tecnologia key={tec} tecnologia={tec}/>))}
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default Proyecto;
