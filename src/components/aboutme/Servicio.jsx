import React from "react";
import {} from "../../assets/components/Servicio.css";

const Servicio = ({ infoServicio }) => {
  const { titulo, descripcion, tecnologias } = infoServicio;


  return (
    <div className="servicio">
      <h2>{titulo}</h2>
      <p className="servicio__descripcion">{descripcion}</p>
      <div className="servicio__tecs">
        {tecnologias.map((tec) => (
          <div className="servicio__tec" key={tec}>
            <img 
              src={require(`../../assets/iconos/${tec}.png`)}
              alt={`${tec}_icono`}
              className="servicio__icono"
            />
            <p className="servicio__nombre">{tec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicio;
