import React, { useContext } from "react";
import "./sideBarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Theme } from "../../contexts/theme";

const SideBar = () => {

  const {themeColor} = useContext(Theme);

  const [menu, setMenu] = useState(false);

  const menuDespl = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className={`${themeColor === 'dark' ? 'cabecera' : 'cabeceraWhite'}`}>
        <h3 className={`${themeColor === 'dark' ? 'cabeceraH2' : 'cabeceraH2White'}`}>Desarrollador Frontend</h3>
        <div className="cabeceraDiv">
          <button className={`${themeColor === 'dark' ? 'cabeceraButton' : 'cabeceraButtonWhite'}`} onClick={menuDespl}>
            <svg
              className={`${themeColor === 'dark' ? 'cabeceraMenu bi bi-list' : 'cabeceraMenuWhite bi bi-list'}`}
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        <nav className={`cabeceraNav ${menu ? "isActive" : ""}`}>
          <ul className="cabeceraUl">
            <li className={`${themeColor === 'dark' ? 'cabeceraLi' : 'cabeceraLiWhite'}`} onClick={menuDespl}>
              <FontAwesomeIcon icon={faHouse} />{" "}
              <Link to={`/home`} className={`${themeColor === 'dark' ? 'menu' : 'menuWhite'}`}>
                {" "}
                Inicio
              </Link>
            </li>
            <li className={`${themeColor === 'dark' ? 'cabeceraLi' : 'cabeceraLiWhite'}`} onClick={menuDespl}>
              <FontAwesomeIcon icon={faUserTie} />
              <Link to={`/about`} className={`${themeColor === 'dark' ? 'menu' : 'menuWhite'}`}>
                {" "}
                Sobre mí
              </Link>{" "}
            </li>
            <li className={`${themeColor === 'dark' ? 'cabeceraLi' : 'cabeceraLiWhite'}`} onClick={menuDespl}>
              <FontAwesomeIcon icon={faBriefcase} />
              <Link to={`/portfolio`} className={`${themeColor === 'dark' ? 'menu' : 'menuWhite'}`}>
                {" "}
                Portafolio
              </Link>{" "}
            </li>
            <li className={`${themeColor === 'dark' ? 'cabeceraLi' : 'cabeceraLiWhite'}`} onClick={menuDespl}>
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <Link to={`/contacto`} className={`${themeColor === 'dark' ? 'menu' : 'menuWhite'}`}>
                {" "}
                Contacto
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </header>

      <div className={`${themeColor === 'dark' ? 'sideBar' : 'sideBarWhite'}`}>
        <div data-aos="fade-up" className="sideBarDivs">
          <div className={`${themeColor === 'dark' ? 'tituloSideBar' : 'tituloSideBarWhite'}`}>
            <h2>Desarrollador Frontend</h2>
          </div>
          <div className={`${themeColor === 'dark' ? 'menuSideBar' : 'menuSideBarWhite'}`}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHouse} />{" "}
                <Link to={`/home`} className={`${themeColor === 'dark' ? 'menu' : 'menuWhite'}`}>
                  {" "}
                  Inicio
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faUserTie} />
                <Link to={`/about`} className={`${themeColor === 'dark' ? 'menu' : 'menuWhite'}`}>
                  {" "}
                  Sobre mí
                </Link>{" "}
              </li>
              <li>
                <FontAwesomeIcon icon={faBriefcase} />
                <Link to={`/portfolio`} className={`${themeColor === 'dark' ? 'menu' : 'menuWhite'}`}>
                  {" "}
                  Portafolio
                </Link>{" "}
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <Link to={`/contacto`} className={`${themeColor === 'dark' ? 'menu' : 'menuWhite'}`}>
                  {" "}
                  Contacto
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className={`${themeColor === 'dark' ? 'footerSideBar' : 'footerSideBarWhite'}`}>
            <p>© Creado por Francisco Riorda</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
