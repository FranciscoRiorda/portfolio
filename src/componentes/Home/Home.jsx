import React, {  useContext } from "react";
import "./homeStyles.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import { FaMoon } from "react-icons/fa";
// import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Theme } from "../../contexts/theme";

const Home = () => {

const {themeColor} = useContext(Theme);

// const changeTheme = () => {
//   if(themeColor === 'dark'){
//     setThemeColor('white');
//   } else {
//     setThemeColor('dark');
//   }
// }

  return (
    <>
      <div className={`${themeColor === 'dark' ? '' : 'bodyy'}`}>
        {/* <div className="themeButton">
        <FaSun className={`themeMode ${themeColor === 'dark' ? 'darkMode' : ''}`} onClick={changeTheme}></FaSun>
        <FaMoon className={`themeMode ${themeColor === 'white' ? 'whiteMode' : ''}`} onClick={changeTheme}></FaMoon>
        </div> */}
        <div className="card">
          <div className="container">
            <div data-aos="fade-up" className="container2">
              <div className="cardPerfil">
                <div className="imgPerfil"></div>

                <div className="perfil">
                  <div data-aos="fade-left" >
                    <p className={`${themeColor === 'dark' ? 'nombre' : 'nombreWhite'}`}>Francisco Riorda</p>
                  </div>
                  <div data-aos="fade-left" >
                    <p className={` ${themeColor === 'dark' ? 'descripcion' : 'descripcionWhite'}`}>
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
                        <FaLinkedin className={`${themeColor === 'dark' ? 'redesHome' : 'redesHomeWhite'}`} />
                      </Link>
                    </div>
                    <div>
                      <Link
                        data-aos="fade-left"
                        to="https://github.com/FranciscoRiorda"
                        target="_blank"
                      >
                        <FaGithub className={`${themeColor === 'dark' ? 'redesHome' : 'redesHomeWhite'}`} />
                      </Link>
                    </div>
                    <div>
                      <Link
                        data-aos="fade-left"
                        to="https://wa.me/3534795305"
                        target="_blank"
                      >
                        <FaWhatsapp className={`${themeColor === 'dark' ? 'redesHome' : 'redesHomeWhite'}`} />
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
