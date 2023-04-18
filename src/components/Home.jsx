import React from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import foto1 from "../Img/5.png";
import foto2 from "../Img/6.png";
import foto3 from "../Img/7.png";
import cara from "../Img/222.png"

const Home = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <>
      <div className="home-cont">
        <div className="home-pres-cont">
          <h1>Soy Juan Bautista Lofredo</h1>
          <img
            className="flecha-home"
            src={foto1}
            alt=""
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="100"
          />
          <img className="medio-flecha-home" src={foto2} alt="" />
          <img
            className="flecha-home"
            src={foto3}
            alt=""
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="100"
          />
        </div>
        <img className="cuerpo-hom" src={cara} alt="" />
      </div>
    </>
  );
};
export default Home;
