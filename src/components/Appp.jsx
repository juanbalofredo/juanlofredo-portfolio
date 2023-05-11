import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import BurguerButton from "./BurguerButton";
import { Analytics } from "@vercel/analytics/react";
import Proyectos from "./Proyectos";

const Appp = () => {
  return (
    <>
      <Analytics />
      <div className="topbar">
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
