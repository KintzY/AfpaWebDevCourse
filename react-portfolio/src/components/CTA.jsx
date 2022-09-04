import React from "react";
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="cta">
      <Link to="/CV" className="btn" target="_blank" rel="noreferrer">Mon Curriculum</Link>
      <Link to="/contact" className="btn btn-primary">Me Contacter</Link>
    </div>
  );
};

export default CTA;
