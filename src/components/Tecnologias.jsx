import React from "react";
import react from "../Img/tecs/atom.png";
import post from "../Img/tecs/potgasa.png";
import js from "../Img/tecs/js.png";
import ht from "../Img/tecs/html.png";
import css from "../Img/tecs/css.png";
import express from "../Img/tecs/Sin nombre.png";
import cloud from "../Img/tecs/cloudi.png";
import redux from "../Img/tecs/redux.png";
import pyt from "../Img/tecs/python.png";
import fire from "../Img/tecs/firebase.png";
import se from '../Img/tecs/se.png'
import node from "../Img/tecs/node-js.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Tecnologias = () => {
  AOS.init({
    duration: 1000,
  });

  function link (url){
     window.location.href = (url)
  }

  return (
    <>
      <div className="tec-cont">
        <div className="tecnos">
          <div className="react-r" onClick={e=>link('https://es.react.dev/')}>
            {" "}
            <h5>React JS</h5>
            <img
              src={react}
              alt="react"
              data-aos="flip-up"
              data-aos-delay="2400"
            />
          </div>
          <div className="js-r">
            {" "}
            <h5>JavaScript</h5>
            <img src={js} alt="js" data-aos="flip-up" data-aos-delay="1600" />
          </div>
          <div className="node-r">
            {" "}
            <h5>Node JS</h5>
            <img
              src={node}
              alt="node"
              data-aos="flip-up"
              data-aos-delay="800"
            />
          </div>
          <div className="post-r">
            {" "}
            <h5>PostgreSQL</h5>
            <img
              src={post}
              alt="post"
              data-aos="flip-up"
              data-aos-delay="800"
            />
          </div>
          <div className="ht-r">
            {" "}
            <h5>HTML</h5>
            <img src={ht} alt="ht" data-aos="flip-up" data-aos-delay="1600" />
          </div>
          <div className="css-r">
            {" "}
            <h5>CSS</h5>
            <img src={css} alt="css" data-aos="flip-up" data-aos-delay="2400" />
          </div>
        </div>
        <div className="tecnos2">
          <div className="express-r">
            <img
              src={express}
              alt="express"
              data-aos="flip-up"
              data-aos-delay="2000"
            />
            <h5>Express JS</h5>
          </div>
          <div className="cloud-r">
            <img
              src={cloud}
              alt="cloud"
              data-aos="flip-up"
              data-aos-delay="1200"
            />
            <h5>Cloudinary</h5>
          </div>
          <div className="redux-r">
            <img
              src={redux}
              alt="redux"
              data-aos="flip-up"
              data-aos-delay="400"
            />
            <h5>Redux</h5>
          </div>
          <div className="fire-r">
            <img
              src={fire}
              alt="fire"
              data-aos="flip-up"
              data-aos-delay="1200"
            />
            <h5>FireBase</h5>
          </div>
          <div className="pyt-r">
            <img src={pyt} alt="pyt" data-aos="flip-up" data-aos-delay="2000" />
            <h5>Python</h5>
          </div>
          <div className="se-r">
            <img src={se} alt="se" data-aos="flip-up" data-aos-delay="2800" />
            <h5>Sequelize</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tecnologias;
