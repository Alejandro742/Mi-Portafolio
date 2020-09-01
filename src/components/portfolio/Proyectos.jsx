import React from "react";
import Proyecto from './Proyecto';

import proyectosInfro from '../../datos/proyectosInfo.json';

const Proyectos = () => {
  return (
    <main className="portafolio">
      <h2>Mi Portafolio</h2>
      <div id="listado" className="listado">
        {proyectosInfro.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </main>
  );
};

export default Proyectos;
