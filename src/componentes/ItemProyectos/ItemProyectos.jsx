import React from "react";
import "../ItemProyectos/stylesItemProyectos.css";

const ItemProyectos = ({ dat }) => {
  return (
    <>
        <div className="cardPortfolio">
          <p>{dat.nombre}</p>
        </div>
    </>
  );
};

export default ItemProyectos;
