import React from "react";
import Proyecto from './Proyecto';

import proyectosInfro from '../../datos/proyectosInfo.json';

const Proyectos = () => {
  return (
    <main className="portafolio">
      <h1 className="portafolio__title">My Portfolio</h1>
      <div id="listado" className="portafolio__listado">
        {proyectosInfro.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </main>
  );
};

export default Proyectos;
