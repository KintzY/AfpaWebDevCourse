import React from "react";
import "../styles/contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Me Contacter</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Couriel</h4>
            <h5>example@mail.com</h5>
            <a href="mailto:example@mail.com" target="_blank" rel="noreferrer">
              Envoyer un message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jhon Doe FaceBook</h5>
            <a href="https://m.me/Kintz.Yann" target="_blank" rel="noreferrer">
              Envoyer un message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Jhon Doe WhatsApp</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+33678910234"
              target="_blank"
              rel="noreferrer"
            >
              Envoyer un message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Votre Nom Complet"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre Couriel"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer un Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
