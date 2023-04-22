import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./stylesWhatsApp.css";

const WhatsApp = () => {
  return (
    <>
      <Link to="https://wa.me/3534795305" target="_blank">
        <div className="contenedorWapp">
          <BsWhatsapp className="iconoWapp" />
        </div>
      </Link>
    </>
  );
};

export default WhatsApp;
