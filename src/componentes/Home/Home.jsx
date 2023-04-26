import React from "react";
import "./homeStyles.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();

  return (
    <>
      <div className="card">
        <div  className="container">
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
                    <FaLinkedin />
                  </div>
                  <div>
                    <FaGithub />
                  </div>
                  <div>
                    <Link data-aos="fade-left" to="https://wa.me/3534795305" target="_blank">
                      <FaWhatsapp className="wappHome"/>
                    </Link>
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
