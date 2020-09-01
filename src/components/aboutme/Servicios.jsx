import React from 'react';
import Servicio from './Servicio';


import serviciosInfo from '../../datos/servicioInfo.json';

const Servicios = () => {
  return ( 
    <div className="servicios contenedor">
      {serviciosInfo.map(servicioItem => <Servicio key={servicioItem.id} infoServicio={servicioItem}/>)}
    </div>
  );
}
 
export default Servicios;