import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";

import Proyectos from "./Proyectos";

const Appp = () => {
  return (
    <>
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
