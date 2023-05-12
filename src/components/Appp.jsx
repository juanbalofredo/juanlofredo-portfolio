import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import BurguerButton from "./BurguerButton";
import { Analytics } from "@vercel/analytics/react";
import Proyectos from "./Proyectos";
import foto1 from "../Img/4.png";
import foto2 from "../Img/1.png";

const Appp = () => {
  return (
    <>
      <Analytics />
      <div className="topbar">
        <div className="nav-img">
          <img src={foto2} alt="3" />
        </div>
        <BurguerButton />
      </div>

      <div className="pag-cont">
        <Navbar />
        <Home />
        <About />
      </div>
      <Proyectos />
      <Footer />
    </>
  );
};

export default Appp;
