// Servicio de Mensajería emailjs
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import './contact.css';

function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      mensaje: '',
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('', '', form.current, '').then(
      (result) => {
        // console.log(result.text);
        message();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const message = () => {
    reset();
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 4000);
  };
  


  return (
    <div className="contact">
      <section className="formulario">
        <h2>
          <strong>CONTACTANOS</strong>
        </h2>
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="data">
            <div className="campo">
              <label>
                <strong>Nombre</strong>
              </label>
              <input
                type="text"
                {...register("nombre", {
                  required: true,
                  maxLength: 30,
                  pattern:
                    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i,
                })}
              />
              <hr />
              {errors.nombre?.type === "required" && (
                <p>El campo nombre es requerido</p>
              )}
              {errors.nombre?.type === "maxLength" && (
                <p>El campo nombre debe tener menos de 30 caracteres</p>
              )}
              {errors.nombre?.type === "pattern" && (
                <p>El formato del nombre es inválido</p>
              )}
            </div>

            <div className="campo">
              <label>
                <strong>Apellido</strong>
              </label>
              <input
                type="text"
                {...register("apellido", {
                  required: true,
                  maxLength: 30,
                  pattern:
                    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i,
                })}
              />
              <hr />
              {errors.apellido?.type === "required" && (
                <p>El campo apellido es requerido</p>
              )}
              {errors.apellido?.type === "maxLength" && (
                <p>El campo apeliido debe tener menos de 30 caracteres</p>
              )}
              {errors.apellido?.type === "pattern" && (
                <p>El formato del apellido es inválido</p>
              )}
            </div>
          </div>

          <div className="data">
            <div className="campo">
              <label>
                <strong>E-mail</strong>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              <hr />
              {errors.email?.type === "required" && (
                <p>El campo email es requerido</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>El formato del email es inválido</p>
              )}
            </div>

            <div className="campo">
              <label>
                <strong>Teléfono</strong>
              </label>
              <input
                type="text"
                {...register("telefono", {
                  required: true,
                  minLength: 10,
                  pattern:
                    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i,
                })}
              />
              <hr />
              {errors.telefono?.type === "required" && (
                <p>El campo teléfono es requerido</p>
              )}
              {errors.telefono?.type === "minLength" && (
                <p>
                  El campo teléfono debe tener al menos 10 caracteres numéricos
                </p>
              )}
              {errors.telefono?.type === "pattern" && (
                <p>
                  El formato del teléfono es inválido (poner sin espacios ni
                  carácteres especiales)
                </p>
              )}
            </div>
          </div>

          <div className="campo">
            <label>
              <strong>Mensaje</strong>
            </label>
            <textarea
              className="textinput"
              {...register("mensaje", {
                required: true,
              })}
            ></textarea>
            <hr />
            {errors.mensaje?.type === "required" && (
              <p>El campo mensaje es requerido</p>
            )}
          </div>

          <button type="submit" value="Enviar">
            Enviar
          </button>
          <div className="message">
            {showSuccessMessage && (
              <div className="success">Tu mensaje ha sido enviado con éxito</div>
            )}
          </div>
        </form>
      </section>

      <section className="info">
        <div className="info-section">
          <p>
            <strong>DIRECCIÓN:</strong>
          </p>
          <p>LUGAR 12345</p>
          <p>CP 9999</p>
          <p>BUENOS AIRES, ARGENTINA</p>
        </div>
        <div className="info-section">
          <p>
            <strong>TELÉFONO:</strong>
          </p>
          <p>111 2222-3333</p>
        </div>
        <div className="info-section">
          <p>
            <strong>MAIL</strong>
          </p>
          <p>contacto@tiendapisados.com.ar</p>
        </div>
        {/* <div className="info-section">
          <p>
            <strong>WHATSAPP</strong>
          </p>
          <p>011 4772-9446</p>
        </div> */}
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1LSFgkQs05hIMpY8JQBYZwZdPaYQ&hl=en_US&ehbc=2E312F"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact
