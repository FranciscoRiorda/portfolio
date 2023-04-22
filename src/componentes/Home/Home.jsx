import React from "react";
import "./homeStyles.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="card">
        <div className="container">
          <div className="container2">
            <div className="cardPerfil">
              <div className="imgPerfil"></div>

              <div className="perfil">
                <div className="nombre">
                  <p>Francisco Riorda</p>
                </div>
                <div className="descripcion">
                  <p>
                    Desarrollador FrontEnd - Técnico Universitario en
                    Programación UTN FRC
                  </p>
                </div>
                <div className="redes">
                  <div>
                    <FaLinkedin />
                  </div>
                  <div>
                    <FaGithub />
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
