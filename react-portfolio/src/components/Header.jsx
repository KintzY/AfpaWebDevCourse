import React from "react";
import "../styles/header.css";
import CTA from "./CTA";
import Avatar from "../assets/avatar.png";
import HeaderSocials from "./HeaderSocials";
import {
  SiJavascript,
  SiPhp,
  SiReact,
  SiSymfony,
  SiMysql,
  SiWordpress,
} from "react-icons/si";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="avatar">
          <img /* src={Avatar} */ alt="Site en Construction" />
        </div>
        <div className="header__text">
          <h3>Bienvenue sur mon site, je suis</h3>
          <h1 className="text-bright">Yann KINTZ</h1>
          <h2 className="text-bright-light">
            Developpeur Web et Web Mobile FullStack à Nîmes
          </h2>
          <h2>Javascript, PHP, React, Symfony, MySQL, WordPress</h2>
          <div className="header__icons">
            <SiJavascript size={30} style={{ color: "yellow" }} />
            <SiPhp size={30} style={{ color: "#787cb4" }} />
            <SiReact size={30} style={{ color: "lightblue" }} />
            <SiSymfony size={30} />
            <SiMysql size={30} style={{ color: "orange" }} />
            <SiWordpress size={30} />
          </div>
          <CTA />
        </div>
      </div>
          <HeaderSocials />
    </header>
  );
};

export default Header;
