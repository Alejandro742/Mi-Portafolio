import React, { Fragment } from 'react';
import Hero from './components/Hero';
import Servicio from './components/Servicio';
import Proyecto from './components/Proyecto';

import serviciosInfo from './datos/servicioInfo.json';
import proyectosInfro from './datos/proyectosInfo.json';

function App() {

    
  return (
    <Fragment>
      <Hero />
      <div className="servicios contenedor">
        {serviciosInfo.map(infoServicio => <Servicio key = {infoServicio.id} infoServicio = {infoServicio}/>)}
      </div>
      <main className="portafolio contenedor">
        <h2>Mi Portafolio</h2>
        <div id="listado" className="listado">
          {proyectosInfro.map(proyecto => <Proyecto key = {proyecto.id} proyecto = {proyecto}/>)}
        </div>
    </main>
    </Fragment>
  );
}
export default App;