import React from "react";
import { Link } from "react-router-dom";
import "./aboutStyles.css";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="about">
        <div data-aos="fade-up" className="containerAbout">
          <div>
            <span>SOBRE MI</span>
          </div>
        </div>
        <div data-aos="fade-up">
          <h3>Francisco Riorda</h3>
          <span>
            Frontend developer | ReactJS | JavaScript | Firebase | MongoDB | Git
            | GitHub
          </span>
        </div>
        <div data-aos="fade-up" className="hr" />
        <div data-aos="fade-up" className="descripcionAbout">
          <p>
            Desarrollador frontend Reactjs en busca de oportunidades para
            aprender y crecer en la industria tecnológica. Con conocimientos en
            HTML, CSS, JavaScript y ReactJS, así como de otras tecnologías
            relacionadas con el desarrollo web.
          </p>
          <p>
            Busco aplicar y seguir aprendiendo mis habilidades en proyectos
            desafiantes y con un enfoque en la calidad y la excelencia. Mi
            objetivo es crecer profesionalmente y contribuir al éxito de la
            empresa en la que trabaje. Además, tengo habilidades para trabajar
            en equipo, aprender rápidamente y resolver problemas de manera
            efectiva.
          </p>
        </div>

        <div data-aos="fade-up" className="hr" />

        <div data-aos="fade-up" className="contactoAbout">
          <ul>
            <li>
              <b>Dirección:</b>
              <span>Córdoba, Argentina</span>
            </li>
            <li>
              <b>Email: </b>
              <span>Riorda7@gmail.com</span>
            </li>
            <li>
              <b>Teléfono: </b>
              <span>0353-154795305</span>
            </li>
            <li>
              <b>Linkedin: </b>
              <span>
                <Link
                  to="https://www.linkedin.com/in/francisco-riorda/"
                  target={"_blank"}
                  className="redesAbout"
                >
                  /in/francisco-riorda/
                </Link>
              </span>
            </li>
            <li>
              <b>GitHub: </b>
              <span>
                <Link
                  to="https://github.com/FranciscoRiorda"
                  target={"_blank"}
                  className="redesAbout"
                >
                  /FranciscoRiorda
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="/assets/pdf/CV Francisco Riorda.pdf"
            download="CV Riorda Francisco"
            className="descargarCv"
          >
            Descargar CV
          </a>
        </div>
        <div data-aos="fade-up" className="hr" />

        <div data-aos="fade-up" className="containerSkills">
          <div>
            <span>Skills</span>
          </div>
          <div className="skills">
            <ul className="skill1">
              <li><FaHtml5/></li>
              <li><FaCss3Alt/></li>
              <li>SASS</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <ul className="skill2">
              <li>Javascript</li>
              <li>Ajax & Fetch</li>
              <li>Librerías extrernas</li>
              <li>Bootstrap</li>
              <li>NodeJs</li>
            </ul>
            <ul className="skill3">
              <li>ReactJS</li>
              <li>JSX</li>
              <li>API Rest</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="hr" />

        <div data-aos="fade-up" className="educacionAbout">
          <div>
            <span>Educación</span>
          </div>
          <div className="ulEducacion">
            <ul className="ulUTN">
              <li>
                <b>Tecnicatura Universitaria en Programación</b>
                <p>Universidad Tecnológica Nacional</p>
                <p className="pSeg">2017 - 2021</p>
              </li>
            </ul>
            <ul>
              <li>
                <b>Desarrollo Web</b>
                <p>CoderHouse</p>
                <p className="pSeg">Mayo 2022</p>
              </li>
              <li>
                <b>Javascript</b>
                <p>CoderHouse</p>
                <p className="pSeg">Octubre 2022</p>
              </li>
              <li>
                <b>ReactJS</b>
                <p>CoderHouse</p>
                <p className="pSeg">Diciembre 2022</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
