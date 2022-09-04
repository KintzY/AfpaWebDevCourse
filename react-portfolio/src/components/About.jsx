import React from "react";
import "../styles/about.css";
import Avatar from "../assets/avatar2.png";
import { FiAward } from "react-icons/fi";
import { ImCogs } from "react-icons/im";
import { BsCardChecklist } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h2>Qui Je Suis</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img /* src={Avatar} */ alt="Site en Construction" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Diplôme</h5>
              <small>BTS/DUT Developpeur Web et Web Mobile</small>
            </article>

            <article className="about__card">
              <ImCogs className="about__icon" />
              <h5>Technologie</h5>
              <small>Javascript, PHP, React, Symfony, MySQL, WordPress</small>
            </article>

            <article className="about__card">
              <BsCardChecklist className="about__icon" />
              <h5>Methode</h5>
              <small>Agile SCRUM, Git, Docker, Merise</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            asperiores nam eos dolor, ut aliquam animi adipisci minus quaerat
            sequi at amet quo odio repellendus unde quasi. Sequi, at nesciunt?
          </p>
          <a href="#contact" className="btn btn-primary">
            Me Contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
