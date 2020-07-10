import React, { Fragment } from 'react';
import Hero from './components/Hero';
import Servicio from './components/Servicio';
import serviciosInfo from './datos/servicioInfo.json';

function App() {

    
  return (
    <Fragment>
      <Hero />
      <div className="servicios contenedor">
        {serviciosInfo.map(infoServicio => <Servicio key = {infoServicio.id} infoServicio = {infoServicio}/>)}
      </div>
    </Fragment>
  );
}
export default App;