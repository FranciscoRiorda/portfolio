import React, { useRef } from "react";
import "../Contacto/contactoStyles.css";
import Maps from "../maps/maps";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_62ou68q",
        "template_70n4sca",
        form.current,
        "9XljjtFcR3B5xdPma"
      )
      .then(
        (result) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Correo enviado',
            text: "Pronto me estaré contactanto",
            showConfirmButton: false,
            timer: 1500
          })
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Correo no enviado',
            text: "Intenta nuevamente mas tarde",
            showConfirmButton: false,
            timer: 1500
          })
        }
      );
  };

  return (
    <>
      <div className="contacto">
        <div className="containerContacto">
          <div data-aos="fade-up">
            <span>CONTACTO</span>
          </div>
        </div>
        <div data-aos="fade-down" className="mapComponent">
          <Maps className="maps"></Maps>
        </div>

        <form data-aos="fade-down" ref={form} onSubmit={sendEmail}>
          <div className="formContacto">
            <input
              className="nombreContacto"
              placeholder="Nombre"
              type="text"
              name="user_name"
              required
            ></input>
            <input
              className="emailContacto"
              placeholder="Email"
              type="email"
              name="user_email"
              required
            ></input>
            <textarea
              name="message"
              placeholder="Mensaje.."
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <div>
            <input
              className="botonSubmit"
              type="submit"
              value="Enviar Mensaje"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacto;
