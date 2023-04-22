import React from "react";
import "../Contacto/contactoStyles.css";
import Maps from "../maps/maps";

const Contacto = () => {
  return (
    <>
      <div className="contacto">
        <div className="containerContacto">
          <div>
            <span>CONTACTO</span>
          </div>
        </div>
        <div className="mapComponent">
            <Maps className="maps"></Maps>
        </div>

        <form action="">
          <div className="formContacto">
            <input className="nombreContacto" placeholder="Nombre"></input>
            <input className="emailContacto" placeholder="Email"></input>
            <textarea
              placeholder="Mensaje.."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="botonSubmit">
            <p type="submit">Enviar Mensaje</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacto;
