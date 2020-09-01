import React from 'react';
import{} from '../../assets/components/Tecnologia.css';

const Tecnologia = ({tecnologia}) => {
  return ( 
    <div className="tecnologia">
      <img src={require(`../../assets/iconos/${tecnologia}.png`)} alt={`${tecnologia}_icono`} className="tecnologia__img"/>
      <p className="tecnologia__nombre">{tecnologia}</p>
    </div>
  );
}
 
export default Tecnologia;
