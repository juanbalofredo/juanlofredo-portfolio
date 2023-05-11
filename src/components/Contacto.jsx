import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";
import BurguerButton from "./BurguerButton";

const Contacto = () => {
  return (
    <>
      <div className="topbar">
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
