import React from "react";
import "../styles/nav.css";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookContent, BiEnvelope } from "react-icons/bi";
/* import { MdOutlineSchool } from "react-icons/md"; */
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  return (
    <nav>
      <Link
        to="home"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <RiHomeLine />
      </Link>
      <Link
        to="about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      {/* <Link
        to="cv"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdOutlineSchool />
      </Link> */}
      <Link
        to="portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiBookContent />
      </Link>
      <Link
        to="contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiEnvelope />
      </Link>
    </nav>
  );
};

export default Nav;
