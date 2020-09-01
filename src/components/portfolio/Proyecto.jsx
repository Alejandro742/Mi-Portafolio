import React, { Fragment } from "react";
import Tecnologia from '../partials/Tecnologia';
import {} from "../../assets/components/Proyecto.css";

const Proyecto = ({ proyecto }) => {
  const { titulo, descripcion, src, github , tecnologias} = proyecto;
  return (
    <Fragment>
      <div className="proyecto">
        <div className="proyecto__shadow">
        <p className="proyecto__descripcion">{descripcion}</p>
        </div>
        <img className="proyecto__img" src={require(`../../assets/proyectos/${src}`)} alt={titulo} />
        <div className="proyecto__contenido">
          <a href={github} target="_blank" rel="noopener noreferrer" ><h3 className="proyecto__title">{titulo}</h3></a>
          <div className="proyecto__tecnologias">
            {tecnologias.map(tec =>(<Tecnologia key={tec} tecnologia={tec}/>))}
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default Proyecto;
