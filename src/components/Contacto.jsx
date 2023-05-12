import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";
import BurguerButton from "./BurguerButton";
import foto1 from "../Img/4.png";
import foto2 from "../Img/1.png";

const Contacto = () => {
  return (
    <>
      <div className="topbar">
        <div className="nav-img">
          <img src={foto2} alt="3" />
        </div>
        <BurguerButton />
      </div>
      <div className="pag-cont">
        <Navbar />
        <Form />
      </div>
      <Footer />
    </>
  );
};
export default Contacto;
