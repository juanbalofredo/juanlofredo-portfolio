import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cara from "../Img/quesopapo2.png"
import Typed from "typed.js";


const Home = () => {
  AOS.init({
    duration: 1000,
  });



  const el = useRef(null);
  useEffect(()=>{
    new Typed(el.current, {
      strings: ['Full-stack Developer','Desarrollador Web','Web Developer',"Desarrollador Full-stack"],
      startDelay:300,
      typeSpeed: 150,
      backDelay: 1000,
      backSpeed: 100,
      smartBackspace:true,
      showCursor:true,
      loop:true,
    });
  })
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
          <h2><span ref={el}></span></h2>
          <h3 className="este-test">Buenos Aires, Argentina</h3>
        </div>
      </div>
    </>
  );
};
export default Home;
