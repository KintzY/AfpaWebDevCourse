import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import "./index.css";
import CvPage from "./routes/CvPage";
import HomePage from "./routes/HomePage";
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import PortfolioPage from './routes/PortfolioPage';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route  path="/" Exact element={<App />}>
        <Route path="/" Exact element={<Navigate to="/home" />} />
        <Route path="home" Exact element={<HomePage />} />
        <Route path="about" Exact element={<AboutPage />} />
        <Route path="contact" Exact element={<ContactPage />} />
        <Route path="portfolio" Exact element={<PortfolioPage />} />
        <Route path="cv" Exact element={<CvPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.querySelector("#root")
);
