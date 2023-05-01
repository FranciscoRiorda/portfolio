import React from "react";
import "./sideBarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sideBar">
        <div data-aos="fade-up" className="sideBarDivs">
          <div className="tituloSideBar">
            <h2>Desarrollador Frontend</h2>
          </div>
          <div className="menuSideBar">
            <ul>
              <li>
                <FontAwesomeIcon icon={faHouse} />{" "}
                <Link to={`/home`} className="menu">
                  {" "}
                  Inicio
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faUserTie} />
                <Link to={`/about`} className="menu">
                  {" "}
                  Sobre mí
                </Link>{" "}
              </li>
              <li>
                <FontAwesomeIcon icon={faBriefcase} />
                <Link to={`/portfolio`} className="menu">
                  {" "}
                  Portafolio
                </Link>{" "}
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <Link to={`/contacto`} className="menu">
                  {" "}
                  Contacto
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="footerSideBar">
            <p>© Creado por Francisco Riorda</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
