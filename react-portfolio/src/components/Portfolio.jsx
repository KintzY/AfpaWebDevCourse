import { React } from "react";
import "../styles/portfolio.css";
import IMG from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG,
    title: "Portfolio Infographie",
    url: "https://kintzy.artstation.com/",
  },
];

const Portfolio = () => {

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, url }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href="https://github.com"
                  className="btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={url}
                  className="btn btn-primary"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
