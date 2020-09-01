import React from "react";
import {} from "../../assets/components/Servicio.css";

const Servicio = ({ infoServicio }) => {
  const { titulo, descripcion, tecnologias } = infoServicio;
  let classFontAwesome = "";
  if (titulo === "BackEnd") {
    classFontAwesome = "fas fa-database";
  } else if (titulo === "FrontEnd") {
    classFontAwesome = "fab fa-css3-alt";
  } else {
    classFontAwesome = "fas fa-code";
  }

  return (
    <div className="servicio">
      <h2>{titulo}</h2>
      <i className={classFontAwesome}></i>
      <p>{descripcion}</p>
      <ul>
        {tecnologias.map((tec) => (
          <li key = {tec}>
            <i className="fas fa-code-branch"></i>{tec}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Servicio;
