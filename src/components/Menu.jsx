import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="btInicio" to="/">Inicio</Link>
        </li>
        <li>
          <Link className="btCrearEncuestas" to="/encuesta/crear">Crear Encuesta</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
