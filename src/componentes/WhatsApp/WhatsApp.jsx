import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./stylesWhatsApp.css";

const WhatsApp = () => {
  return (
    <>
      <div className="contenedorWapp">
        <Link to="https://wa.me/3534795305" target="_blank">
          <BsWhatsapp className="iconoWapp" />
        </Link>
      </div>
    </>
  );
};

export default WhatsApp;
