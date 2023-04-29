import React from "react";
import "../ItemProyectos/stylesItemProyectos.css";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { BsPlayCircleFill } from "react-icons/bs";

const ItemProyectos = ({ dat }) => {
  return (
    <>
      <div
        className="cardPortfolio"
        style={{
          backgroundImage: `url(${dat.img})`,
        }}
      >
        <ul className="repo">
          <li>{dat.nombre}</li>
          <li>
            <Link className="iconoProject" to={`${dat.url}`} target="_blank">
              <BsGithub />
            </Link>
          </li>
          <li>
            <Link className="iconoProject" to={`${dat.url}`} target="_blank">
              <BsPlayCircleFill />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ItemProyectos;
