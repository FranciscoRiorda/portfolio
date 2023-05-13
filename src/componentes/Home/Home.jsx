import React, {  useContext, useState } from "react";
import "./homeStyles.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Theme } from "../../contexts/theme";

const Home = () => {

const {themeColor, setThemeColor} = useContext(Theme);

const changeTheme = (event) => {
  if(themeColor === 'dark'){
    setThemeColor('white');
  } else {
    setThemeColor('dark');
  }
}

  return (
    <>
      <div>
        <div className="themeButton">
        <FaLightbulb className={`themeMode ${themeColor === 'dark' ? 'darkMode' : ''}`} onClick={changeTheme}></FaLightbulb>
        <FaRegLightbulb className={`themeMode ${themeColor === 'white' ? 'whiteMode' : ''}`} onClick={changeTheme}></FaRegLightbulb>
        </div>
        <div className="card">
          <div className="container">
            <div data-aos="fade-up" className="container2">
              <div className="cardPerfil">
                <div className="imgPerfil"></div>

                <div className="perfil">
                  <div data-aos="fade-left" className="nombre">
                    <p>Francisco Riorda</p>
                  </div>
                  <div data-aos="fade-left" className="descripcion">
                    <p>
                      Desarrollador FrontEnd - Técnico Universitario en
                      Programación UTN FRC
                    </p>
                  </div>
                  <div data-aos="fade-left" className="redes">
                    <div>
                      <Link
                        data-aos="fade-left"
                        to="https://www.linkedin.com/in/francisco-riorda/"
                        target="_blank"
                      >
                        <FaLinkedin className="redesHome" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        data-aos="fade-left"
                        to="https://github.com/FranciscoRiorda"
                        target="_blank"
                      >
                        <FaGithub className="redesHome" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        data-aos="fade-left"
                        to="https://wa.me/3534795305"
                        target="_blank"
                      >
                        <FaWhatsapp className="redesHome" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
