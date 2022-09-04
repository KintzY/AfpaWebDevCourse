import Header from "../components/Header";
import Footer from "../components/Footer";
import About from './../components/About';
import Experience from './../components/Experience';
import Services from './../components/Services';

const HomePage = () => {
  return (
    <div className={"website"}>
      <Header />
      <About />
        <Experience />
        <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
