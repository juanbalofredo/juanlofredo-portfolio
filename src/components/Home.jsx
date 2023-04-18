import React from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import foto1 from "../Img/5.png";
import foto2 from "../Img/6.png";
import foto3 from "../Img/7.png";
import cara from "../Img/222.png";

const Home = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <>
      <div className="home-cont">
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
          className="cuerpo-hom"
          src={cara}
          alt=""
        />
        <div className="home-pres-cont">
          <h1>Juan Lofredo</h1>
          <h2 className="este-test">Buenos Aires, Argentina</h2>
        </div>
      </div>
    </>
  );
};
export default Home;
