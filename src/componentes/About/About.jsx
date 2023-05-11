import React from "react";
import { Link } from "react-router-dom";
import "./aboutStyles.css";

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
          <br></br>
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
            <section className="sectionSkills">
              <figure className="figureSkills">
              <img className="fondoReact figureSkills" alt="reactjs" src='../assets/img/reactjs.png'/>
                <figcaption>ReactJs</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoJs figureSkills" alt="javascript" src='../assets/img/js.png'/>
                <figcaption>Javascript</figcaption>
              </figure>
              <figure className="figureSkills">
                <img className="fondoHtml figureSkills" alt="html5" src='../assets/img/html5.png'/>
                <figcaption>HTML</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoCss figureSkills" alt="css3" src='../assets/img/css3.png'/>
                <figcaption>CSS</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoSass figureSkills" alt="sass" src='../assets/img/sass.png'/>
                <figcaption>Sass</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoGit figureSkills" alt="git" src='../assets/img/git2.png'/>
                <figcaption>Git</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoGithub figureSkills" alt="github" src='../assets/img/github.png'/>
                <figcaption>Github</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoBootstrap figureSkills" alt="bootstrap" src='../assets/img/bootstrap.png'/>
                <figcaption>Bootstrap</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoTailwind figureSkills" alt="bootstrap" src='../assets/img/tailwind.png'/>
                <figcaption>Tailwind</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoNode figureSkills" alt="nodejs" src='../assets/img/nodejs.png'/>
                <figcaption>NodeJs</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoFirebase figureSkills" alt="firebase" src='../assets/img/firebase.png'/>
                <figcaption>Firebase</figcaption>
              </figure>
              <figure className="figureSkills">
              <img className="fondoMongo figureSkills" alt="mongodb" src='../assets/img/mongodb.png'/>
                <figcaption>MongoDB</figcaption>
              </figure>
            </section>
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
