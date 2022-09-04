import React from "react";
import "../styles/footer.css";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to="/home" className="footer__logo">
        KintzY
      </Link>
      <ul className="permalinks">
        <li>
          <Link to="/home">Page d'Acceuil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
        {/* <li><Link to="/cv">Mon Curriculum Vitae</Link></li> */}
        <li>
          <Link to="/portfolio">Mon Savoir Fair</Link>
        </li>
        <li>
          <Link to="/contact">Me Contacter</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com">
          <FaFacebookSquare />
        </a>
        <a href="http://instagram.com">
          <BsInstagram />
        </a>
        <a href="http://twitter.com">
          <FaTwitterSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KintzY. tous droits reservé.</small>
      </div>
    </footer>
  );
};

export default Footer;
